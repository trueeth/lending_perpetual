import Link from 'next/link'
//import Layout from '../components/Layout'
import { Box, Divider, Grid, TextField, Typography } from '@mui/material'
import * as React from 'react'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import LoanDialog from '../components/Styled/LoanDialog'
import Image from 'next/image'

const IndexPage = () => {
  const [visible, setVisible] = React.useState(false)

  const handleCloseDialog = () => {
    setVisible(false)
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
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 5,
                  alignItems: 'center',
                  p: { xs: 1, md: 2 },
                  bgcolor: '#1c2c42',
                  borderRadius: 5,
                  minHeight: '74px',
                  '& .MuiBox-root': {
                    width: 'fit-content',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image
                    src="https://twopaws.app/static/media/fuel.95a53fd17843648c51b0d000461e4216.svg"
                    alt="img"
                    width={30}
                    height={30}
                  />

                  <Typography>15.63</Typography>
                  <Typography>Gwei</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image
                    src="https://cdn.redstone.finance/symbols/eth.svg"
                    alt="img"
                    width={30}
                    height={30}
                  />
                  <Typography>15.63</Typography>
                  <Typography>Gwei</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image
                    src="https://twopaws.app/static/media/TWOPAW.75a7c20b8a536d2f3310900c94cf2bbf.svg"
                    alt="img"
                    width={30}
                    height={30}
                  />
                  <Typography>15.63</Typography>
                  <Typography>Gwei</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 3,
                  p: 2,
                  bgcolor: '#1c2c42',
                  minHeight: '68px !important',
                  borderRadius: 5,
                  '& .MuiButton-root': {
                    whiteSpace: 'nowrap',
                    padding: 'auto 20px',
                    maxWidth: '140px',
                  },
                }}
              >
                <Link href="./account">
                  <Button variant="outlined">My Account</Button>
                </Link>
                <Link href="/">
                  <Button variant="outlined">Orders Book</Button>
                </Link>
                <Button variant="outlined" onClick={() => setVisible(true)}>
                  New Loan
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          mt={4}
          sx={{
            mx: { xs: 0, md: 30 },
            minHeight: '450px',
            borderRadius: '20px',
            bgcolor: 'rgb(31, 48, 74)',
            border: '1px solid #141e2f',
          }}
        >
          <Typography sx={{ ml: 2, fontSize: '22px', my: 2 }}>
            PAWDAO NFT
          </Typography>
          <Divider sx={{ bgcolor: '#141e2f', p: '0.2px' }} />
          <Box
            sx={{
              mt: 2,
              mb: 5,
              mx: { xs: 1, md: 8 },
              bgcolor: '#182539',
              borderRadius: '15px',
              p: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                px: '20px',
                mb: 1,
              }}
            >
              <Typography sx={{ mt: 1, letterSpacing: 1 }}>
                PAWDAO Trade
              </Typography>
              <Typography sx={{ mt: 2, fontSize: '13px', color: '#9597a1' }}>
                Protocol Balance: 2283 PAWDAO
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifycontent: 'space-between',
                alignItems: 'flex-end',
                flexDirection: 'column',

                mx: 1,
                py: 1,
                px: 2,
                bgcolor: '#243043',
                borderRadius: '8px',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 3,
                  mt: 1,
                }}
              >
                <TextField
                  type="number"
                  sx={{
                    width: '85%',
                    bgcolor: '#182539',
                    border: '1px solid #383944',
                    borderRadius: '8px',
                    fontSize: '30px',
                  }}
                  inputProps={{
                    sx: {
                      color: '#ececec',
                      fontSize: '20px',
                      height: '4px',
                      ml: '5px',
                    },
                  }}
                  InputProps={{
                    sx: {
                      borderRadius: '5px',
                      border: 'none',
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
                <Typography sx={{ mr: 1, fontSize: '20px' }}>PAWDAO</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '& .MuiTypography-root': {
                      fontSize: '13px',
                      color: '#9597a1',
                      mt: 1,
                    },
                  }}
                >
                  <Typography>Balance:</Typography>
                  <Typography>0</Typography>
                  <Typography>PAWDAO</Typography>
                  <Typography sx={{ color: '#3c63d7 !important' }}>
                    Max
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ flexDirection: 'column', '& .MuiBox-root': { mb: 1 } }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mr: 2,
                    '& .MuiTypography-root': {
                      fontSize: '13px',
                      color: '#9597a1',
                      mt: 1,
                    },
                  }}
                >
                  <Typography>Your Token Balance:</Typography>
                  <Typography>0</Typography>
                  <Typography>TWOPAW</Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}
              >
                <Typography sx={{ color: '#9597a1' }}>Buy Price</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image
                    src="https://twopaws.app/static/media/TWOPAW.75a7c20b8a536d2f3310900c94cf2bbf.svg"
                    alt="img"
                    width={30}
                    height={30}
                  />
                  <Typography>40000</Typography>
                  <Typography>TWOPAW</Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}
              >
                <Typography sx={{ color: '#9597a1' }}>Sell Price</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image
                    src="https://twopaws.app/static/media/TWOPAW.75a7c20b8a536d2f3310900c94cf2bbf.svg"
                    alt="img"
                    width={30}
                    height={30}
                  />
                  <Typography>29999</Typography>
                  <Typography>TWOPAW</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: { xs: 'column', md: 'row' },
                  px: 5,
                  gap: 2,
                  '& .MuiButton-root': {
                    whiteSpace: 'nowrap',
                    px: 0.5,
                  },
                }}
              >
                <Button variant="outlined">Approve & Buy</Button>
                <Button variant="outlined">Approve & Sell</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <LoanDialog open={visible} handleClose={() => setVisible(false)} />
      </Container>
    </>
  )
}

export default IndexPage
