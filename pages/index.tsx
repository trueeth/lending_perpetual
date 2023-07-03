import Link from 'next/link'
//import Layout from '../components/Layout'
import { Box, Divider, FormControlLabel, Grid, Typography } from '@mui/material'
import * as React from 'react'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import EnhancedTable from '../components/Styled/Table'
import SupplyDialog from '../components/Styled/SupplyDialog'
import CustomCheckBox from '../components/Styled/CheckBox'
import Filter from '../components/Styled/ordersFilter'

const IndexPage = () => {
  //dialog
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
          overflow: 'auto',
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

                  '& .MuiBox-root': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  <img
                    src="https://twopaws.io/token-icons/default.png"
                    alt="img"
                    width="30"
                    height="30"
                  />
                  <Filter />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  <img
                    src="https://twopaws.io/token-icons/default.png"
                    alt="img"
                    width="30"
                    height="30"
                  />
                  <Filter />
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
                <Link href="./dashboard">
                  <Button variant="outlined">Dashboard</Button>
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
                control={<CustomCheckBox />}
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
                    '&:hover': {
                      borderColor: '#454f5b',
                    },
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
        <SupplyDialog open={visible} handleClose={() => setVisible(false)} />
      </Container>
    </>
  )
}

export default IndexPage
