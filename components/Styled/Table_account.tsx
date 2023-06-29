import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { makeStyles } from '@mui/styles'

interface Data {
  calories: number
  carbs: number
  fat: number
  name: string
  protein: number
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  }
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
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
        // '&MuiTableScrollbar': {
        //   height: '20px',
        // },
      }}
    >
      <Table
        sx={{
          borderSpacing: '0px 5px',
          borderCollapse: 'separate',
        }}
      >
        <TableHeader />
        <TableBody>
          {rows.map((row: any, index) => {
            function scale(arg0: number) {
              throw new Error('Function not implemented.')
            }

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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default StyledTable
