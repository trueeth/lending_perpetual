import * as React from 'react'
import {
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@mui/material'

interface Data {
  loan: number
  collateral: number
  fee: number
  duration: string
  reward: number
}

function createData(
  loan: number,
  collateral: number,
  fee: number,
  duration: string,
  reward: number
): Data {
  return {
    loan,
    collateral,
    fee,
    duration,
    reward,
  }
}

const rows = [
  createData(1000, 1250, 0, '12 days', 2800),
  createData(1000, 1500, 0, '12 days', 3000),
  createData(800, 1000, 4, '10 days', 2100),
  createData(1000, 1250, 0, 'closed', 0),
  createData(600, 800, 0, 'closed', 0),
  createData(1000, 1250, 0, 'closed', 0),
]

function StyledTable() {
  return (
    <TableContainer
      sx={{
        px: 2,
        height: '64vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '5px',
          height: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#294171',
          borderRadius: '20px',
        },
      }}
    >
      <Table
        sx={{
          borderSpacing: '0px 5px',
          borderCollapse: 'separate',
        }}
      >
        {' '}
        <TableHead>
          <TableRow
            sx={{
              '& .MuiTableCell-root': {
                color: '#9597a1',
                backgroundColor: '#1f304a',
                textAlign: 'center',
                fontFamily: 'square',
                fontSize: '15px',
                borderBottom: 'none',
                paddingTop: '10px',
                paddingBottom: '10px',
              },
            }}
          >
            <TableCell>Loan Amount</TableCell>
            <TableCell>Collateral Amount</TableCell>
            <TableCell>Lender Fee</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Reward</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  height: '80px',
                  '&:hover': {
                    transitionDuration: '500ms',
                    transform: 'scale(1.02)',
                    '& .MuiTableCell-root': {
                      bgcolor: 'rgb(24,37,57)',
                    },
                  },
                  '& .MuiTableCell-root': {
                    borderBottom: '1px solid #383944',
                    borderTop: '1px solid #383944',
                    textAlign: 'center',
                    color: '#ececec !important',
                    fontFamily: 'square !important',
                    fontSize: '18px',
                    bgcolor: '#1c2c44',
                  },
                  '.MuiTableCell-root:first-child': {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    borderLeft: '1px solid #383944',
                  },
                  '.MuiTableCell-root:last-child': {
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                    borderRight: '1px solid #383944',
                  },
                }}
              >
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <img
                      src="https://arbiscan.io/token/images/tether_32.png"
                      alt="img"
                      width="30"
                      height="30"
                    />
                    <Typography>{row.loan} USDT</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <img
                      src="https://arbiscan.io/token/images/centre-usdc_28.png"
                      alt="img"
                      width="30"
                      height="30"
                    />
                    <Typography>{row.collateral} USDC</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: 'rgb(0, 247, 167)' }}>
                    {row.fee}% fee
                  </Typography>
                </TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <img
                      src="https://twopaws.app/static/media/TWOPAW.75a7c20b8a536d2f3310900c94cf2bbf.svg"
                      alt="img"
                      width="30"
                      height="30"
                    />
                    <Typography sx={{ color: 'rgb(0, 247, 167)' }}>
                      {row.reward}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default StyledTable
