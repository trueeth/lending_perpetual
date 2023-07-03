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

const Filter = () => {
  const [crypto, setCrypto] = React.useState('')

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
            py: 0.5,

            // gap: '3px !important',
          },
        }}
        inputProps={{
          padding: '0px !important',
          gap: '0px !important',
        }}
      >
        <MenuItem value="">
          <Box
            sx={{
              width: '100%',
              justifyContent: 'center',
              pl: 3,
            }}
          >
            <Typography sx={{ letterSpacing: '2px' }}>Filter</Typography>
          </Box>
        </MenuItem>
        {TokenList.map((item, index) => (
          <MenuItem value={item.token_name} key={index}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                pl: 3,
                py: '5px',
                gap: '6px !important',
              }}
            >
              <img
                style={{
                  height: '24px',
                  width: '24px',
                  borderRadius: '12px',
                }}
                src={item.token_logo}
                loading="lazy"
                alt="USDT logo"
              />
              <Typography>{item.token_name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default Filter
