import { Box, FormControlLabel, Typography } from '@mui/material'
import CustomCheckBox from './CheckBox'
import Image from 'next/image'

const BorrowCalculate = () => {
  return (
    <Box
      sx={{
        '& .MuiBox-root': {
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '& .MuiTypography-root': {
          fontSize: { xs: '2.2vw', md: '13px' },
          letterSpacing: 1,
        },
      }}
    >
      <Box>
        <Typography>Collateral Amount</Typography>
        <Typography>WETH</Typography>
      </Box>
      <Box>
        <Typography>Loan Amount</Typography>
        <Typography>USDT</Typography>
      </Box>

      <Box>
        <Typography>Lender Fee</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>0% (0 USDT)</Typography>
          <Image
            src="https://twopaws.app/static/media/edit.91a05fa3ed28fcfa16476bf11192ea45.svg"
            alt="edit"
            width="22"
            height="22"
            style={{ marginTop: '-5px', cursor: 'pointer' }}
          />
        </Box>
      </Box>
      <Box>
        <Typography>You will Get</Typography>
        <Typography>NaN USDT</Typography>
      </Box>
    </Box>
  )
}
export default BorrowCalculate
