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
import Image from 'next/image'
import { Order, OrderRole, OrderState } from 'interfaces'
import { getTokenLogoFromAddress, getTokenNameFromAddress } from 'utils/token'
import { formatUnits } from 'viem'
import { trim } from 'utils/trim'

function OrderTable({ orders }: { orders: Array<Order> }) {
  return (
    <TableContainer
      sx={{
        px: 2,
        height: '64vh',
        overflowY: 'auto',
      }}
    >
      <Table
        sx={{
          borderSpacing: '0px 5px',
          borderCollapse: 'separate',
        }}
      >
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
          {orders?.map((order: Order, index) => {
            let feeAmount = formatUnits(order.lenderFeeAmount, 18)
            let loanAmount = formatUnits(order.loanAmount, 18)
            let collateralAmount = formatUnits(order.collateralAmount, 18)
            let feePercent = Number(feeAmount) / Number(loanAmount)
            let duration =
              order.status === OrderState.OPEN
                ? 'Open'
                : order.status === OrderState.WORKING
                ? 'Working'
                : order.status === OrderState.CLOSED
                ? 'Closed'
                : 'Canceled'
            return (
              <TableRow
                key={index}
                sx={{
                  height: '80px',
                  cursor: 'pointer',
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
                  '.MuiTableCell-root:first-of-type': {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    borderLeft: '1px solid #383944',
                  },
                  '.MuiTableCell-root:last-of-type': {
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
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        zIndex: 100,
                        top: '-20px',
                        left: '-10px',
                        border: '1px solid grey',
                        borderRadius: '5px',
                        p: 0.2,
                      }}
                    >
                      <Typography sx={{ fontSize: '10px', color: 'grey' }}>
                        {order.role === OrderRole.SUPPLY
                          ? 'Supply Order'
                          : 'Borrow Order'}
                      </Typography>
                    </Box>
                    <Image
                      src={getTokenLogoFromAddress(order.loanToken)}
                      alt="img"
                      width={30}
                      height={30}
                    />
                    <Typography width={80}>
                      {loanAmount} {getTokenNameFromAddress(order.loanToken)}
                    </Typography>
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
                    <Image
                      src={getTokenLogoFromAddress(order.collateralToken)}
                      alt="img"
                      width={30}
                      height={30}
                    />
                    <Typography width={80}>
                      {collateralAmount}{' '}
                      {getTokenNameFromAddress(order.collateralToken)}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: 'rgb(0, 247, 167)' }}>
                    {trim(feePercent)} %
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{duration}</Typography>
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
                    <Typography sx={{ color: 'rgb(0, 247, 167)' }}>
                      {0}
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
export default OrderTable
