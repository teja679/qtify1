import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonComponent from './ButtonComponent';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* logo */}
        <Box component='div'
          size="large"
          edge="start"
          sx={{ mr: 2 }}
        >
          <Logo />
        </Box>
        {/* Search bar */}
        <SearchBar />
        {/* feebback button */}
        <ButtonComponent text={'Give Feedback'} />
      </Toolbar>
    </AppBar>
  );
}

/*  <Typography component="div" sx={{ flexGrow: 1 }}>
     <TextField
         size="small"
         sx={{
             backgroundColor: 'primary.light',
             color: 'primary.dark',
             border: '1px solid',
             borderColor: 'primary.dark',
             borderRadius: '5px'
         }}
         // value={inputValue}
         // onChange={(e) => debounceSearch(e, debounceTimeout)}
         InputProps={{
             endAdornment: (
                 <InputAdornment position="end" >
                     <Search color="primary.dark" />
                 </InputAdornment>
             ),
         }}
         placeholder="Search a album of your choice"
         name="search"
     />
 </Typography> */