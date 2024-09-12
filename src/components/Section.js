import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import Grid from '@mui/material/Grid2';
import './Section.css';

import 'swiper/css';           // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles
import Carousel from './Carousel';  // Assuming this component uses Swiper
import TabsComponent from './TabsComponent';

const Section = ({ albumType }) => {
  const [albums, setAlbums] = useState([]);
  const [collapse, setCollapse] = useState(true);
  const endpoint = albumType !== 'Songs' ? `albums/${albumType.toLowerCase()}` : `${albumType.toLowerCase()}`;
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://qtify-backend-labs.crio.do/${endpoint}`);
      setAlbums(res.data);
      // console.log(res.data[0])
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return (
    <Box sx={{ my: 3, mx: 2 }}>
      {/* Section Header */}
      <Box sx={{ gap: '1rem', display: 'flex', justifyContent: 'space-between', m: 2 }}>
        <Typography variant='h5' sx={{ color: 'primary.light' }}>{albumType === 'Songs' ? albumType : albumType + " Albums"}</Typography>
        {albumType !== 'Songs' && (
          <Button sx={{ textTransform: 'none' }} onClick={() => setCollapse(!collapse)}>
            {collapse ? 'Show all' : 'Collapse'}
          </Button>
        )}
      </Box>

      {/* Content */}
      {albumType === 'Songs' ? (
        <TabsComponent albums={albums} albumType={albumType} />
      ) : (
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {collapse ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 3,
                flexWrap: 'nowrap',  // Prevent wrapping of cards
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                width: '100%'
              }}
            >
              <Carousel albumType={albumType} albums={albums} />
            </Box>
          ) : (
            <Grid container spacing={3} sx={{ mx: 'auto', alignItems: 'center', justifyContent: 'center' }}>
              {albums.map((album) => (
                <Grid item key={album.id}>
                  <CardComponent albumType={albumType} album={album} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Section;
