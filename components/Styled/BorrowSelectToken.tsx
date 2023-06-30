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
        <Box>
          <Button
            id="basic-button-1"
            aria-controls={
              Boolean(anchorState.btn1) ? 'basic-menu-1' : undefined
            }
            aria-haspopup="true"
            aria-expanded={Boolean(anchorState.btn1) ? 'true' : undefined}
            onClick={handleClick}
            name="btn1"
          >
            Filter
            <ArrowDropDownSharpIcon />
          </Button>
          <Menu
            id="basic-menu-1"
            anchorEl={anchorState.btn1}
            open={Boolean(anchorState.btn1)}
            onClose={handleCloseButton}
            MenuListProps={{
              'aria-labelledby': 'basic-button-1',
            }}
            elevation={0}
          >
            <MenuItem>Tokennomic</MenuItem>
            <MenuItem>Lender Order</MenuItem>
            <MenuItem>Borrower Order</MenuItem>
            <MenuItem>Rewarded Order</MenuItem>
          </Menu>
        </Box>
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
        <Box>
          <Button
            id="basic-button-1"
            aria-controls={
              Boolean(anchorState.btn1) ? 'basic-menu-1' : undefined
            }
            aria-haspopup="true"
            aria-expanded={Boolean(anchorState.btn1) ? 'true' : undefined}
            onClick={handleClick}
            name="btn1"
          >
            Filter
            <ArrowDropDownSharpIcon />
          </Button>
          <Menu
            id="basic-menu-1"
            anchorEl={anchorState.btn1}
            open={Boolean(anchorState.btn1)}
            onClose={handleCloseButton}
            MenuListProps={{
              'aria-labelledby': 'basic-button-1',
            }}
            elevation={0}
          >
            <MenuItem>Tokennomic</MenuItem>
            <MenuItem>Lender Order</MenuItem>
            <MenuItem>Borrower Order</MenuItem>
            <MenuItem>Rewarded Order</MenuItem>
          </Menu>
        </Box>
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
