import * as React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Typography, Dialog, Box, Button } from '@mui/material'
import DatePicker from '../styled/DatePicker'

import { useState } from 'react'

import LoanDetail from './LoanDetail'
import {
  IActionSlice,
  createBorrowOrder,
  createSupplyOrder,
} from '../../store/slices/action'
import SupplyBox from './SupplyBox'
import BorrowBox from './BorrowBox'

import { IReduxState, useAppDispatch } from '../../store/store'
import { useAccount } from 'wagmi'
import { useProtocolContract } from 'hooks/useContract'
import { useSelector } from 'react-redux'
import { DatePickerType, OrderType } from 'interfaces'
import useTokenAllowance from 'hooks/useTokenAllowance'
import { getProtocolAddress } from 'utils/addressHelpers'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { parseUnits } from 'viem'

interface IOpenProps {
  open: boolean
  handleClose: () => void
}

export default function LoanDialog({ open, handleClose }: IOpenProps) {
  const [view, setview] = useState('supply')

  const dispatch = useAppDispatch()
  const { address: account } = useAccount()
  const protocolContract = useProtocolContract()

  const actionState = useSelector<IReduxState, IActionSlice>(
    (state) => state.action
  )

  const [approvalState, approve] = useApproveCallback(
    view === 'supply'
      ? actionState.supply.loanToken
      : actionState.borrow.collateralToken,
    view === 'supply'
      ? parseUnits(actionState.supply.loanAmount, 18)
      : parseUnits(actionState.borrow.collateralAmount, 18),
    getProtocolAddress()
  )

  const createOrder = async () => {
    if (view === 'supply') {
      dispatch(
        createSupplyOrder({
          account,
          protocolContract,
          loanToken: actionState.supply.loanToken,
          loanAmount: actionState.supply.loanAmount,
          collateralToken: actionState.supply.collateralToken,
          collateralAmount: actionState.supply.collateralAmount,
          lenderFee: 0,
          timestamps: [
            actionState.supply.startTimestamp,
            actionState.supply.endTimestamp,
          ],
        })
      )
    } else {
      dispatch(
        createBorrowOrder({
          account,
          protocolContract,
          loanToken: actionState.borrow.loanToken,
          loanAmount: actionState.borrow.loanAmount,
          collateralToken: actionState.borrow.collateralToken,
          collateralAmount: actionState.borrow.collateralAmount,
          lenderFee: 0,
          timestamps: [
            actionState.borrow.startTimestamp,
            actionState.borrow.endTimestamp,
          ],
        })
      )
    }
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          backgroundColor: '#1f304a',
          boxShadow: 'none',
          borderRadius: '15px',
          color: '#ececec',
          padding: '10px 20px',
        },
      }}
      scroll={'body'}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography p={1} sx={{ fontSize: { xs: '2.2vw', md: '20px' } }}>
          Create {view === 'supply' ? 'Supply' : 'Borrow'} Loan
        </Typography>
        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          mt: 3,
          mx: 4,
        }}
      >
        <Button
          value="supply"
          onClick={() => setview('supply')}
          sx={{
            backgroundColor: view === 'supply' ? '#182539 !important' : '',
          }}
        >
          Supply
        </Button>

        <Button
          value="borrow"
          onClick={() => setview('borrow')}
          sx={{
            backgroundColor: view === 'borrow' ? '#182539 !important' : '',
          }}
        >
          Borrow
        </Button>
      </Box>
      <Box
        sx={{
          '& .MuiTypography-root': {
            mt: 2,
            mb: 0.5,
            fontSize: { xs: '15px', md: '15px' },
            letterSpacing: 1,
          },
        }}
      >
        {view === 'supply' ? <SupplyBox /> : <BorrowBox />}
        <Typography ml={2} mb={0.5}>
          The repayment period for this credit starts on:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <DatePicker
            pickerType={DatePickerType.START}
            orderType={view === 'supply' ? OrderType.SUPPLY : OrderType.BORROW}
          />
        </Box>
        <Typography ml={2} mb={0.5}>
          Ends on:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <DatePicker
            pickerType={DatePickerType.END}
            orderType={view === 'supply' ? OrderType.SUPPLY : OrderType.BORROW}
          />
        </Box>
      </Box>

      <LoanDetail
        orderType={view === 'supply' ? OrderType.SUPPLY : OrderType.BORROW}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          mb: 1,
          mt: 2,
          mx: 3,
        }}
      >
        <Button
          onClick={() => {
            if (approvalState === ApprovalState.APPROVED) createOrder()
            else if (approvalState === ApprovalState.NOT_APPROVED) approve()
          }}
        >
          {approvalState === ApprovalState.NOT_APPROVED && 'Approve & '}Create
          Order
        </Button>
      </Box>
    </Dialog>
  )
}
