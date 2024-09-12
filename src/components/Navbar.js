import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { InputAdornment, InputBase, TextField, SearchIcon } from '@mui/material';
import { Search, SentimentDissatisfied } from "@mui/icons-material";
import logo from '../assets/logo.png'
import ButtonComponent from './ButtonComponent';

export default function Navbar() {
  return (
    <Box sx={{ fontFamily: 'Poppins' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            size="large"
            edge="start"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt='logo' />
          </Box>
          <Box component="div"
            size="small"
            sx={{
              backgroundColor: 'primary.light',
              color: 'primary.dark',
              border: '1px solid',
              borderColor: 'primary.dark',
              borderRadius: '5px'
            }}>
            <InputBase
              sx={{
                ml: 1, p: 0.5, flex: 1, borderRight: '1px solid #111', width: '15rem', textAlign: 'left'
              }}
              placeholder="Search a album od your choice"
              inputProps={{ "aria-label": "search a album od your choice" }}
            />
            <IconButton type="button" aria-label="search">
              <Search color="primary.dark" />
            </IconButton>
          </Box>
          <ButtonComponent value={'Give Feedback'} />
        </Toolbar>
      </AppBar>
    </Box >
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