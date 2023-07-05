import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import * as React from 'react'
import DialogFilter from './dialogFilter'

const SupplySelectToken = () => {
  return (
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
          <Typography>0 WEHT</Typography>
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
        <DialogFilter />
        <TextField
          type="number"
          sx={{
            width: '100px',
            bgcolor: '#182539',
            border: '1px solid #383944',
            borderRadius: '8px',
          }}
          inputProps={{
            sx: {
              color: '#ececec',
              fontSize: '20px',
              height: '7px',
              ml: '2px',
            },
          }}
          InputProps={{
            sx: {
              '&.MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#454f5b',
                },
                '&:hover fieldset': {
                  borderColor: '#454f5b',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#454f5b',
                },
              },
            },
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
        <DialogFilter />
        <TextField
          type="number"
          sx={{
            minwidth: '100px',
            maxWidth: '100px',
            bgcolor: '#182539',
            border: '1px solid #383944',
            borderRadius: '8px',
          }}
          inputProps={{
            sx: {
              color: '#ececec',
              fontSize: '20px',
              height: '7px',
              ml: '2px',
            },
          }}
          InputProps={{
            sx: {
              '&.MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#454f5b',
                },
                '&:hover fieldset': {
                  borderColor: '#454f5b',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#454f5b',
                },
              },
            },
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
export default SupplySelectToken
