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
import { makeStyles } from '@mui/styles'

interface Data {
  loan: number
  collateral: number
  fee: number
}

function createData(loan: number, collateral: number, fee: number): Data {
  return {
    loan,
    collateral,
    fee,
  }
}

const rows = [
  createData(1000, 1250, 0),
  createData(1000, 1250, 0),
  createData(1000, 1250, 0),
  createData(1000, 1250, 0),
  createData(1000, 1250, 0),
  createData(1000, 1250, 0),
]

const useStyles = makeStyles({
  root: {
    '& .MuiTableCell-head': {
      color: '#9597a1',
      backgroundColor: '#1f304a',
      textAlign: 'center',
      fontFamily: 'square',
      fontSize: '15px',
      borderBottom: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
})

const TableHeader = () => {
  const classes = useStyles()
  return (
    <TableHead>
      <TableRow className={classes.root}>
        <TableCell>Loan Amount</TableCell>
        <TableCell>Collateral Amount</TableCell>
        <TableCell>Lender Fee</TableCell>
      </TableRow>
    </TableHead>
  )
}
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
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default StyledTable
