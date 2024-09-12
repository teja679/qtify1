import * as React from 'react';
import { Card, CardMedia, CardContent, Chip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import img1 from '../assets/vibratingHeadphone.png'

export default function CardComponent({ album }) {
  // console.log(album)
  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: '10px', backgroundColor: 'primary.dark', color: 'primary.light' }}>
        <CardMedia
          width="25%"
          component="img"
          alt="green iguana"
          height="250"
          image={album.image}
        />
        <CardContent style={{ padding: '10px' }} sx={{ py: 1, backgroundColor: 'primary.light' }}>
          <Chip label={`${album.follows} Follows`}
            sx={{ color: "primary.light", backgroundColor: 'primary.dark', padding: '4px 8px 4px 8px' }} />
        </CardContent>
      </Card>
      <Typography
        variant="body2"
        sx={{ color: 'primary.light', textAlign: 'center', mt: 1 }}
      >
        {album.title}
      </Typography>
    </>
  );
}
/* 
    "id": "c0e236d9-2cb6-4d9a-bc0b-84d59c486287",
    "title": "Burdensome Attention",
    "description": "Iste aliquid voluptates voluptatibus.\nVoluptatum perferendis nisi saepe adipisci culpa eaque quos.",
    "follows": 11084,
    "image": "https://images.pexels.com/photos/629159/pexels-photo-629159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "slug": "burdensome-attention", */
{/* <CardActions>
  <Button size="small">Share</Button>
  <Button size="small">Learn More</Button>
  </CardActions> */}
{/* <Typography gutterBottom variant="h5" component="div">
    Lizard
  </Typography>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography> */}