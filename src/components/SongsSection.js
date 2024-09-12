import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import Grid from '@mui/material/Grid2';
import './Section.css'

import 'swiper/css';           // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles  
import Carousel from './Carousel';
import TabsComponent from './TabsComponent';


const SongsSection = ({ albumType }) => {
	const [albums, setAlbums] = useState([])
	const [collapse, setCollapse] = useState(true)
	const endpoint = albumType !== 'Songs' ? `albums/${albumType.toLowerCase()}` : `${albumType.toLowerCase()}`;
	const fetchData = async () => {
		const res = await axios.get(`https://qtify-backend-labs.crio.do/${endpoint}`)

		setAlbums(res.data)
	}
	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Box sx={{ my: 3, mx: 2 }}>
			<Box sx={{ gap: '1rem', display: 'flex', justifyContent: 'space-between', m: 2 }}>
				<Typography variant='h5' sx={{ color: 'primary.light' }}>{albumType}</Typography>
				{albumType !== 'Songs'
					&& <Button sx={{ textTransform: 'none' }} onClick={(() => setCollapse(!collapse))}>{`${collapse ? 'Show all' : 'Collapse'}`}</Button>
				}
			</Box>
			{albumType === 'Songs' ?
				<TabsComponent >
					{/* <Carousel albumType={true} albums={albums} /> */}
				</TabsComponent>
				:
				<Box style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
					{collapse ? (
						<Box
							sx={{
								display: 'flex', justifyContent: 'flex-start', gap: 3, flexWrap: 'nowrap',  // Prevent wrapping of cards
								overflowX: 'auto', scrollBehavior: 'smooth', width: '100%'
							}}
						>
							<Carousel albumType={true} albums={albums} />
						</Box>
					)
						:
						<Grid container spacing={3} sx={{ mx: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
							{albums.map((album) => (
								<Grid item key={album.id} >
									<CardComponent albumType={false} album={album} />
								</Grid>
							))}
						</Grid>
					}
				</Box>
			}
		</Box >
	)
}

export default SongsSection
