import { Box, TextField } from '@mui/material'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'

const MobileDate = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['MobileDateTimePicker']}
        sx={{
          '& .MuiInputBase-root': {
            py: 1,
            px: 3,
            border: '1px solid #454f5b',
            borderRadius: '10px',
          },
          '& .MuiInputBase-root:hover': {
            borderColor: '#454f5b',
          },
          '& .MuiInputBase-input': {
            height: '20px',
            color: '#ececec',
            border: '1px solid #454f5b',
            borderRadius: '8px',
            textAlign: 'center',
            padding: 1,
            bgcolor: '#203349',
          },
        }}
      >
        <DemoItem>
          <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default MobileDate

{
  /* <button
      type="button"
      className="text-truncate date-time-Button-text btn btn-primary"
      style={{
        backgroundColor: 'rgb(32, 51, 73)',
        border: '1px solid rgb(69, 79, 91)',
        width: ' 70%',
        marginTop: '9px',
      }}
    >
      07/01/2023, 10:38 PM
    </button> */
}
