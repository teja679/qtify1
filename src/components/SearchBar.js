import { Search } from '@mui/icons-material'
import { Box, IconButton, InputBase } from '@mui/material'
import React from 'react'

function SearchBar() {
  return (
    <div className='search-bar'>
       <Box component="div"
          size="small"
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            color: 'primary.dark',
            border: '1px solid',
            borderColor: 'primary.dark',
            borderRadius: '5px'
          }}>
          <InputBase
            sx={{
              color: 'primary.dark',
              ml: 1, p: 0.5, flex: 1, borderRight: '1px solid #111', width: '15rem', textAlign: 'left'
            }}
            placeholder="Search a album of your choice"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="button" aria-label="search">
            <Search color="primary.dark" />
          </IconButton>
        </Box>
    </div>
  )
}

export default SearchBar
