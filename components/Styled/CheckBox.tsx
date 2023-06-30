import { makeStyles } from '@mui/styles'
import { Checkbox } from '@mui/material'
import * as React from 'react'
const useStyles = makeStyles({
  root: {
    '& .MuiSvgIcon-root': {
      fill: 'white',
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  },
})

const CustomCheckBox = () => {
  const classes = useStyles()
  return <Checkbox className={classes.root} />
}
export default CustomCheckBox
