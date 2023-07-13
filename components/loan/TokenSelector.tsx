import * as React from 'react'
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { TokenList } from '../../constants/token'
import Image from 'next/image'
import {
  setBorrowCollateralToken,
  setBorrowLoanToken,
  setSupCollateralToken,
  setSupLoanToken,
} from 'store/slices/action'
import { Address } from 'viem'
import { useDispatch } from 'react-redux'

const TokenSelector = ({
  orderType,
  tokenType,
  initial,
}: {
  orderType: string
  tokenType: string
  initial?: string
}) => {
  const dispatch = useDispatch()
  const [token, setToken] = React.useState(initial ?? 'USDC')

  const handleChange = (e) => {
    setToken(e.target.value as string)
    const tokenMeta = TokenList.find(
      (element) => element.name === (e.target.value as string)
    )
    if (orderType === 'supply' && tokenType === 'loan') {
      dispatch(setSupLoanToken({ loanToken: tokenMeta.address as Address }))
    } else if (orderType === 'supply' && tokenType === 'collateral') {
      dispatch(
        setSupCollateralToken({ collateralToken: tokenMeta.address as Address })
      )
    } else if (orderType === 'borrow' && tokenType === 'loan') {
      dispatch(setBorrowLoanToken({ loanToken: tokenMeta.address as Address }))
    } else if (orderType === 'borrow' && tokenType === 'collateral') {
      dispatch(
        setBorrowCollateralToken({
          collateralToken: tokenMeta.address as Address,
        })
      )
    }
  }

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={token}
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
          <MenuItem value={item.name} key={index}>
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
                src={item.logo}
                loading="lazy"
                alt="USDT logo"
              />
              <Typography sx={{ m: '0px !important' }}>{item.name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default TokenSelector
