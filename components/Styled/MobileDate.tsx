import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    '& .MuiDialog-root': {
      '& .MuiButton-root': {
        backgorundColor: '#203349 !important',
        color: '#ececec !important',
      },
      '& .MuiPickersToolbarText-root': {
        color: '#ececec important',
      },
    },
  },
})

const MobileDate = () => {
  const classes = useStyles()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        // components={['MobileDateTimePicker']}
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
        <MobileDateTimePicker
          defaultValue={dayjs('2022-04-17T15:30')}
          className={classes.root}
        />
      </Box>
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
