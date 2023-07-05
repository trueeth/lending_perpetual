import { Typography, Dialog, Box, Button, TextField } from '@mui/material'

const currentdate = new Date()
const year = currentdate.getFullYear()
const month = currentdate.getMonth() + 1
const day = currentdate.getDate()
const hour = currentdate.getHours()
const minute = currentdate.getMinutes()

const CustomDate = () => {
  return (
    <Box
      sx={{
        border: '1px solid #454f5b',
        px: '10px',
        pb: 1,
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        flexWrap: 'wrap',
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
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box>
          <Typography>year</Typography>
          <TextField
            type="number"
            defaultValue={year}
            InputProps={{
              sx: {
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
        </Box>
        <Box>
          <Typography>Month</Typography>
          <TextField
            defaultValue={month}
            InputProps={{
              sx: {
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
        </Box>
        <Box>
          <Typography>Day</Typography>
          <TextField
            defaultValue={day}
            InputProps={{
              sx: {
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
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 0.3,
        }}
      >
        <Box>
          <Typography>hour</Typography>
          <TextField
            defaultValue={hour}
            InputProps={{
              sx: {
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
        </Box>
        <Box>
          <Typography sx={{ pt: '27px', color: 'white !important' }}>
            :
          </Typography>
        </Box>
        <Box>
          <Typography>minutes</Typography>
          <TextField
            defaultValue={minute}
            InputProps={{
              sx: {
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
        </Box>
      </Box>
    </Box>
  )
}
export default CustomDate
