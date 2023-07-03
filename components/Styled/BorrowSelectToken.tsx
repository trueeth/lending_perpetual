import { Box, TextField, Typography } from '@mui/material'
import * as React from 'react'
import DialogFilter from './dialogFilter'
const BorrowSelectToken = () => {
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
          <Typography>Balance:</Typography>
          <Typography>0 WEHT</Typography>
          <Typography sx={{ color: '#3c63d7 !important' }}>Max</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          border: '1px solid #454f5b',
          px: '10px',
          py: 1,
          borderRadius: '10px',
        }}
      >
        <DialogFilter />
        <TextField
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
      </Box>
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
          <Typography>1 USDC =</Typography>
          <Typography>0.99</Typography>
          <Typography>$</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          border: '1px solid #454f5b',
          px: '10px',
          py: 1,
          borderRadius: '10px',
        }}
      >
        <DialogFilter />
        <TextField
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
      </Box>
    </Box>
  )
}
export default BorrowSelectToken
