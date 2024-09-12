import * as React from 'react';
import { Card, CardMedia, CardContent, Chip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import img1 from '../assets/vibratingHeadphone.png'

export default function CardComponent({ album, albumType }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, borderRadius: '10px', backgroundColor: 'primary.dark', color: 'primary.light' }}>
        <CardMedia
          width="25%"
          component="img"
          alt="green iguana"
          height="250"
          image={album.image}
        />
        <CardContent style={{ padding: '10px' }} sx={{ py: 1, backgroundColor: 'primary.light', textAlign: 'left', }}>
          <Chip label={albumType === 'Songs' ? `${album.likes} likes` : `${album.follows} Follows`}
            sx={{ color: "primary.light", backgroundColor: 'primary.dark', padding: '4px 8px 4px 8px' }} />
        </CardContent>
      </Card>
      <Typography
        variant="body2"
        sx={{ color: 'primary.light', textAlign: 'left', mt: 1 }}
      >
        {album.title}
      </Typography>
    </div>
  );
}
