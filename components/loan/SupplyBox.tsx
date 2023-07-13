import { Box, Typography } from '@mui/material'
import * as React from 'react'
import TokenSelector from './TokenSelector'
import StyledTextField from 'components/styled/TextField'
import {
  setSupLoanAmount,
  setSupCollateralAmount,
  IActionSlice,
} from 'store/slices/action'
import { useDispatch, useSelector } from 'react-redux'
import { IReduxState } from 'store/store'
import { getTokenNameFromAddress } from 'utils/token'
import { useAccount, useBalance } from 'wagmi'
import { useTokenBalance } from 'hooks/useTokenBalance'
import { trim } from 'utils/trim'

const SupplyBox = () => {
  const dispatch = useDispatch()
  const actionState = useSelector<IReduxState, IActionSlice>(
    (state) => state.action
  )

  const balance = useTokenBalance(actionState.supply.loanToken)

  return (
    <Box
      sx={{
        '& .MuiTypography-root': {
          mt: 2,
          mb: 0.5,
          fontSize: { xs: '10px', md: '15px' },
          letterSpacing: 1,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography>Loan Amount</Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '& .MuiTypography-root': {
              fontSize: { md: '13px !important' },
              color: '#9597a1',
            },
          }}
        >
          <Typography>Balance:</Typography>
          <Typography>
            {trim(Number(balance.data?.formatted ?? '0'))}{' '}
            {getTokenNameFromAddress(actionState.supply.loanToken)}
          </Typography>
          <Typography sx={{ color: '#3c63d7 !important' }}>Max</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          border: '1px solid #454f5b',
          px: '10px',
          py: 1,
          borderRadius: '10px',
        }}
      >
        <TokenSelector orderType="supply" tokenType="loan" />
        <StyledTextField
          value={actionState.supply.loanAmount}
          onChange={(e) => {
            dispatch(setSupLoanAmount({ loanAmount: e.target.value }))
          }}
        />
        <Box sx={{ width: '8%' }}></Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography>Collateral Amount</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '& .MuiTypography-root': {
              fontSize: { md: '13px !important' },
              color: '#9597a1',
            },
          }}
        >
          <Typography>1 USDC =</Typography>
          <Typography>0.99</Typography>
          <Typography>$</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          border: '1px solid #454f5b',
          px: '10px',
          py: 1,
          borderRadius: '10px',
        }}
      >
        <TokenSelector
          orderType="supply"
          tokenType="collateral"
          initial="AVAX"
        />
        <StyledTextField
          value={actionState.supply.collateralAmount}
          onChange={(e) => {
            dispatch(
              setSupCollateralAmount({
                collateralAmount: e.target.value,
              })
            )
          }}
        />
        <Box
          sx={{
            border: '2px solid rgb(0, 247, 167)',
            borderRadius: '50%',
            width: { xs: '7vw', md: '40px' },
            height: { xs: '7vw', md: '40px' },
            mr: 0,
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: '10px',
              ml: '6px !important',
              mt: '8px !important',
            }}
          >
            0%
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default SupplyBox
