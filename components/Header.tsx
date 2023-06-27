import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'

const Header = () => {
  const [anchorState, setAnchorState] = React.useState<any | null>({
    btn1: null,
    btn2: null,
  })

  const handleClick = (e) => {
    setAnchorState({ [e.target.name]: e.currentTarget })
  }

  const handleClose = (e) => {
    setAnchorState({ [e.target.name]: null })
  }
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        backgroundImage: 'linear-gradient(90deg,#243b55,#182539)! important',
      }}
    >
      <Toolbar disableGutters variant="dense" sx={{ p: 2 }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#ececec',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <img
                  src="https://twopaws.app/static/media/TwoPawsText.89307c3bce199daeedd1811f8d446a33.svg"
                  alt="logoText"
                  style={{
                    width: '100px',
                    height: '60px',
                    cursor: 'pointer',
                  }}
                />
              </Box>
              <Box>
                <img
                  src="https://twopaws.app/static/media/twoPaws.1e6aa9782eb237ce91ba260a6bb39f22.svg"
                  alt="logo"
                  style={{
                    width: '100px',
                    height: '60px',
                    cursor: 'pointer',
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '40px', fontFamily: 'Square !important' }}
            >
              Orders Book
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              '& .MuiButton-root': {
                minWidth: '120px',
              },
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
                Info
                <ArrowDropDownSharpIcon />
              </Button>
              <Menu
                id="basic-menu-1"
                anchorEl={anchorState.btn1}
                open={Boolean(anchorState.btn1)}
                onClose={handleClose}
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
            <Box>
              <Button
                id="basic-button-2"
                aria-controls={
                  Boolean(anchorState.btn2) ? 'basic-menu-2' : undefined
                }
                aria-haspopup="true"
                aria-expanded={Boolean(anchorState.btn2) ? 'true' : undefined}
                onClick={handleClick}
                name="btn2"
              >
                Unknown
                <ArrowDropDownSharpIcon />
              </Button>
              <Menu
                id="basic-menu-2"
                anchorEl={anchorState.btn2}
                open={Boolean(anchorState.btn2)}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-2',
                }}
                elevation={0}
              >
                <MenuItem>Ethereum</MenuItem>
                <MenuItem>Arbitrum</MenuItem>
                <MenuItem>Binance</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
