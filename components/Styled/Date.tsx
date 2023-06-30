import { Typography, Dialog, Box, Button, TextField } from '@mui/material'

const currentdate = new Date()
const year = currentdate.getFullYear()
const month = currentdate.getMonth() + 1
const day = currentdate.getDate()
const hour = currentdate.getHours()
const minute = currentdate.getMinutes()

const CustomDate = () => {
  return (
    <Box>
      <Box
        sx={{
          border: '1px solid #454f5b',
          px: '10px',
          pb: 1,
          borderRadius: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 1,
            px: 2,
            '& .MuiTypography-root': {
              fontSize: '13px',
              color: '#9597a1',
              mt: ' 0px !important',
              ml: '5px',
            },
            '& .MuiTextField-root': {
              width: '70px',
              bgcolor: '#182539',
              border: '1px solid #383944',
              borderRadius: '8px',
              '& .MuiInputBase-input': {
                color: '#ececec',
                fontSize: '15px',
                height: '2px',
                textAlign: 'right',
              },
            },
          }}
        >
          <Box>
            <Typography>year</Typography>
            <TextField type="number" value={year} />
          </Box>
          <Box>
            <Typography>Month</Typography>
            <TextField value={month} />
          </Box>
          <Box>
            <Typography>Day</Typography>
            <TextField value={day} />
          </Box>
          <Box>
            <Typography>hour</Typography>
            <TextField value={hour} />
          </Box>
          <Box>
            <Typography>minutes</Typography>
            <TextField value={minute} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default CustomDate
