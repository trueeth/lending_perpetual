import {
  Box,
  Button,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import * as React from 'react'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'
import Filter from './Filter'
const BorrowSelectToken = () => {
  const [anchorState, setAnchorState] = React.useState<any | null>({
    btn1: null,
    btn2: null,
  })
  const handleClick = (e) => {
    setAnchorState({ [e.target.name]: e.currentTarget })
  }

  const handleCloseButton = (e) => {
    setAnchorState({ [e.target.name]: null })
  }
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
        <Filter />
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
        <Filter />
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
        />
      </Box>
    </Box>
  )
}
export default BorrowSelectToken
