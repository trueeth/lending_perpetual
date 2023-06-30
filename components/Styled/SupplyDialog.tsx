import * as React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import {
  Typography,
  Dialog,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Link,
} from '@mui/material'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import CustomDate from './Date'
import CustomCheckBox from './CheckBox'
import SupplySelectToken from './SupplySelectToken'
import SupplyCalculate from './SupplyCalculate'
import { useState, useEffect } from 'react'
import BorrowSelectToken from './BorrowSelectToken'
import BorrowCalculate from './BorrowCalculate'

interface IOpenProps {
  open: boolean
  handleClose: () => void
}

export default function SupplyDialog({ open, handleClose }: IOpenProps) {
  const [view, setview] = useState('supply')
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          backgroundColor: '#1f304a',
          boxShadow: 'none',
          borderRadius: '15px',
          paddingInline: '15px',
          color: '#ececec',
        },
      }}
      scroll={'body'}
      // sx={{
      //   '& .MuiButton-root': {
      //     maxWidth: '150px',
      //   },
      // }}
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
            fontSize: { xs: '2.2vw', md: '15px' },
            letterSpacing: 1,
          },
        }}
      >
        {view === 'supply' ? <SupplySelectToken /> : <BorrowSelectToken />}
        <Typography ml={2} mb={0.5}>
          The repayment period for this credit starts on:
        </Typography>
        <CustomDate />
        <Typography ml={2} mb={0.5}>
          Ends on:
        </Typography>
        <CustomDate />
      </Box>

      {view === 'supply' ? <SupplyCalculate /> : <BorrowCalculate />}
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
        <Button onClick={() => console.log('')}>
          {view === 'borrow' && 'Approve & '}Create Order
        </Button>
      </Box>
    </Dialog>
  )
}
