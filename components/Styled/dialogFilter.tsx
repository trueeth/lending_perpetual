import * as React from 'react'
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { TokenList } from '../../constants/token'
import Image from 'next/image'

const DialogFilter = () => {
  const [crypto, setCrypto] = React.useState('USDT')

  const handleChange = (event: SelectChangeEvent) => {
    setCrypto(event.target.value)
  }

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={crypto}
        onChange={handleChange}
        displayEmpty
        sx={{
          color: '#ececec',
          borderRadius: '8px',
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
          '& .MuiSvgIcon-root': {
            color: '#ececec',
          },
          '& .MuiSelect-select': {
            p: 0,
            gap: '3px !important',
          },
        }}
        inputProps={{
          padding: '0px !important',
        }}
      >
        {TokenList.map((item, index) => (
          <MenuItem value={item.token_name} key={index}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                pl: 3,
                gap: 1,
                py: 1,
              }}
            >
              <Image
                width={24}
                height={24}
                src={item.token_logo}
                loading="lazy"
                alt="USDT logo"
              />
              <Typography sx={{ m: '0px !important' }}>
                {item.token_name}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default DialogFilter
