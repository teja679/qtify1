import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import vibratingHeadphone from '../assets/vibratingHeadphone.png'

export default function HeroSection() {
  return (
    <Box sx={{ py: 3, px: 6, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', fontFamily: 'Poppins, sans-serif', backgroundColor: 'primary.dark', color: 'primary.light' }}>
      <Typography variant='h4' sx={{ flex: 1 }}>
        100 Thousand Songs, ad-free <br /> Over thousands of podcast episodes
      </Typography>
      <Box
        component="img"
        src={vibratingHeadphone}
        alt="Headphones"
        sx={{ height: '100%', width: 'auto', maxHeight: '270px' }}
      />
    </Box >
  );
}
