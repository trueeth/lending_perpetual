import * as React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Typography, Dialog, Box, Button } from '@mui/material'

interface IOpenProps {
  open: boolean
  handleClose: () => void
}

export default function LoanDialog({ open, handleClose }: IOpenProps) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography p={2}> Create Supply Loan</Typography>
        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button>Supply</Button>
        <Button>Borrow</Button>
      </Box>
      <Button autoFocus onClick={() => console.log('')}>
        Create Order
      </Button>
    </Dialog>
  )
}
