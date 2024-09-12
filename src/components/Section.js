import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import Grid from '@mui/material/Grid2';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Section.css'

const Section = ({ albumType }) => {
	const [albums, setAlbums] = useState([])
	const [collapse, setCollapse] = useState(true)
	const [currentSlide, setCurrentSlide] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/${albumType.toLowerCase()}`)
			// console.log(res.data)
			setAlbums(res.data)
		}
		fetchData()
	}, [])
	const handlePrev = () => {
		setCurrentSlide((prev) => (prev === 0 ? albums.length - 1 : prev - 1));
	};

	const handleNext = () => {
		console.log('Helo')
		setCurrentSlide((prev) => (prev === albums.length - 1 ? 0 : prev + 1));
	};
	return (
		<Box sx={{ my: 3, mx: 2 }}>
			<Box sx={{ gap: '1rem', display: 'flex', justifyContent: 'space-between', mx: 2 }}>
				<Typography variant='h5' sx={{ color: 'primary.light' }}>{albumType} Albums</Typography>
				<Button sx={{ textTransform: 'none' }} onClick={(() => setCollapse(!collapse))}>{`${collapse ? 'Show all' : 'Collapse'}`}</Button>
			</Box>
			<Box style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
				{collapse ? (
					<Box
						sx={{
							display: 'flex', justifyContent: 'flex-start', gap: 3, flexWrap: 'nowrap',  // Prevent wrapping of cards
							overflowX: 'auto', scrollBehavior: 'smooth', width: '100%', margin: 'auto',
						}}
					>
						{albums.map((album, idx) => (
							<Box key={album.id} sx={{ flex: '0 0 auto' }} className={`indicator ${currentSlide === idx ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)}>
								<CardComponent album={album} />
							</Box>
						))}
						<ChevronLeftIcon sx={{ backgroundColor: 'primary.main' }} className="btn btn-left"
							onClick={handlePrev} />
						<ChevronRightIcon sx={{ backgroundColor: 'primary.main' }} className='btn btn-right'
							onClick={handleNext} />
					</Box>
				)
					:
					<Grid container spacing={3} sx={{ mx: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
						{albums.map((album) => (
							<Grid item key={album.id} >
								<CardComponent album={album} />
							</Grid>
						))}
					</Grid>
				}
			</Box>
		</Box >
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