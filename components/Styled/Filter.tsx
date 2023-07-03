import * as React from 'react'
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'
import { makeStyles } from '@mui/styles'

const Filter = () => {
  const [anchorState, setAnchorState] = React.useState<any | null>({
    btn1: null,
    btn2: null,
  })

  const handleClick = (e) => {
    setAnchorState({ [e.target.name]: e.currentTarget })
  }

  const handleClose = (e) => {
    setAnchorState({ [e.target.name]: null })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        '& .MuiButton-root': {
          minWidth: '100px',
        },
      }}
    >
      <img
        src="https://twopaws.io/token-icons/default.png"
        alt="img"
        width="30"
        height="30"
      />
      <Button
        id="basic-button-1"
        aria-controls={Boolean(anchorState.btn1) ? 'basic-menu-1' : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorState.btn1) ? 'true' : undefined}
        onClick={handleClick}
        name="btn1"
      >
        Filter
        <ArrowDropDownSharpIcon />
      </Button>
      <Menu
        id="basic-menu-1"
        anchorEl={anchorState.btn1}
        open={Boolean(anchorState.btn1)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-1',
        }}
        elevation={0}
        sx={{
          '& .MuiMenuItem-root': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            pl: 2,
            mt: 1,
          },
        }}
      >
        <MenuItem>
          <img
            style={{ height: '24px', width: '24px', borderRadius: '12px' }}
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
            loading="lazy"
            alt="USDT logo"
          />
          <Typography>USDT</Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
        </MenuItem>
        <MenuItem>
          <img
            style={{ height: '24px', width: '24px', borderRadius: '12px' }}
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png"
            loading="lazy"
            alt="DAI logo"
          />
          <Typography>DAI</Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
        </MenuItem>
        <MenuItem>
          <img
            style={{ height: '24px', width: '24px', borderRadius: '12px' }}
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
            loading="lazy"
            alt="AVAX logo"
          />
          <Typography>AVAX</Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
        </MenuItem>
        <MenuItem>
          <img
            style={{ height: '24px', width: '24px', borderRadius: '12px' }}
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png"
            loading="lazy"
            alt="LINK logo"
          />
          <Typography>LINK</Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
        </MenuItem>
      </Menu>
    </Box>
  )
}
export default Filter
