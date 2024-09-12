import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import Grid from '@mui/material/Grid2';

const Section = () => {
	const [topAlbums, setTopAlbums] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
			// console.log(res.data)
			setTopAlbums(res.data)
		}
		fetchData()
	}, [])
	return (
		<Box >
			<Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 2 }}>
				<Typography variant='h5' sx={{ color: 'primary.light' }}>Top Albums</Typography>
				<Button>Collapse</Button>
			</Box>
			<Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

				<Grid container spacing={3} sx={{ mx: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
					{topAlbums.map((album) => (
						<Grid item key={album.id} >
							<CardComponent album={album} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	)
}

export default Section
/* {
		"id": "c0e236d9-2cb6-4d9a-bc0b-84d59c486287",
		"title": "Burdensome Attention",
		"description": "Iste aliquid voluptates voluptatibus.\nVoluptatum perferendis nisi saepe adipisci culpa eaque quos.",
		"follows": 11084,
		"image": "https://images.pexels.com/photos/629159/pexels-photo-629159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
		"slug": "burdensome-attention",
		"songs": [
				{
						"id": "431c2d98-15e0-443b-adb3-c463c269e86a",
						"title": "Wabash Cannonball",
						"artists": [
								"Felix Raynor PhD",
								"Gretchen Runte"
						],
						"genre": {
								"key": "pop",
								"label": "Pop"
						},
						"likes": 42475,
						"image": "https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
						"durationInMs": 28548
				},
		 */