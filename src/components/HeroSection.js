import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import vibratingHeadphone from '../assets/vibratingHeadphone.png'

export default function HeroSection() {
  return (
    <Box sx={{ p: 3, pX: 6, height: '270px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', fontFamily: 'Poppins', backgroundColor: 'primary.dark', color: 'primary.light' }}>
      <Typography variant='h4'>
        100 Thousand Songs, add-free Over thousands podcast episodes
      </Typography>
      <Box
        size="large"
        edge="start"
        sx={{ m: 2 }}
      >
        <img height='300px' sx={{ height: '60px' }} src={vibratingHeadphone} alt='Not found' />

      </Box>
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