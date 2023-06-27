import Link from 'next/link'
//import Layout from '../components/Layout'
import {
  Box,
  Checkbox,
  CssBaseline,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material'
import * as React from 'react'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'
import { Container } from '@mui/material'
import EnhancedTable from '../components/Styled/Table'

const IndexPage = () => {
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
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          mt: 2,
          width: '100%',
          fontFamily: 'Rubik',
        }}
      >
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  p: { xs: 1, md: 2 },
                  bgcolor: '#1c2c42',
                  borderRadius: 5,
                  '& .MuiButton-root': {
                    minWidth: '100px',
                  },
                  '& .MuiBox-root': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  },
                }}
              >
                <Box>
                  <img
                    src="https://twopaws.io/token-icons/default.png"
                    alt="img"
                    width="30"
                    height="30"
                  />
                  <Button
                    id="basic-button-1"
                    aria-controls={
                      Boolean(anchorState.btn1) ? 'basic-menu-1' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={
                      Boolean(anchorState.btn1) ? 'true' : undefined
                    }
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
                  <img
                    src="https://twopaws.io/token-icons/default.png"
                    alt="img"
                    width="30"
                    height="30"
                  />
                  <Button
                    id="basic-button-2"
                    aria-controls={
                      Boolean(anchorState.btn2) ? 'basic-menu-2' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={
                      Boolean(anchorState.btn2) ? 'true' : undefined
                    }
                    onClick={handleClick}
                    name="btn2"
                  >
                    Filter
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
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 2,
                  p: 2,
                  bgcolor: '#1c2c42',
                  minHeight: '68px !important',
                  borderRadius: 5,
                  '& .MuiButton-root': {
                    whiteSpace: 'nowrap',

                    padding: 'auto 20px',
                  },
                }}
              >
                <Button variant="outlined">My Account</Button>
                <Button variant="outlined">Dashboard</Button>
                <Button variant="outlined">New Loan</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          mt={4}
          sx={{
            width: '100%',
            minHeight: '80vh',
            borderRadius: '20px',
            bgcolor: 'rgb(31, 48, 74)',
            border: '1px solid #141e2f',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              px: 3,
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '25px' }}>Supply Market</Typography>
              <Typography
                sx={{ fontSize: '12px', color: 'rgb(149, 151, 161)' }}
              >
                The escrow loan has already been added to the protocol.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                py: 2,
                '& .MuiButton-root': {
                  minWidth: '100px',
                },
              }}
            >
              <FormControlLabel
                value="start"
                control={
                  <Checkbox
                    sx={{
                      color: '#eee',
                      '&.Mui-checked': {
                        color: '#eee',
                      },
                    }}
                  />
                }
                label="History"
                labelPlacement="start"
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 2,
                  '& .MuiButton-root': {
                    width: 'fit-content',
                  },
                }}
              >
                <Button variant="outlined">Supply</Button>
                <Button variant="outlined">Borrow</Button>
                <Button variant="outlined">All</Button>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: '#141e2f', p: '0.2px' }} />
          <EnhancedTable />
        </Box>
      </Container>
    </>
  )
}

export default IndexPage
