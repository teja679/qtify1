import { Box, Button, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react'

const SongsSection = ({ album }) => {
	console.log(album)
	const [totalDuration, setTotalDuration] = useState('');
	const getDuration = (album, isItForSong) => {
		// let totalMinutes = album.songs.reduce((tMs, item) => tMs + item.durationInMs, 0);
		// let hours = Math.floor(totalMinutes / 24);
		// let mins = Math.floor(totalMinutes % 24);
		// if (isItForSong) {
		// 	return `${hours}:${mins}`;
		// }
		// return `${hours} hr ${mins} min`;
	}
	useEffect(() => {
		setTotalDuration(getDuration(album));
	}, [])
	return (
		<div>
			<Grid container sx={{ mx: 4, my: 2 }}>
				<Grid item xs={3} >
					{/* <CardMedia
						width="25%"
						component="img"
						alt="green iguana"
						height="250"
						image={album.image}
					/> */}
				</Grid>
				<Grid item xs={9}>
					<Box>
						{/* <Typography variant='h3'>{album.title}</Typography>
						<Typography variant='body2'>{album.description}</Typography>
						<Typography variant='ul' sx={{ display: 'flex' }}>
							<Typography variant='li'>{album.songs.length} songs</Typography>
							<Typography variant='li'>{album.totalDuration}</Typography>
							<Typography variant='li'>{`${album.follows}` ? `${album.follows} Follows` : `${album.likes} Likes`}</Typography>
						</Typography>
						<Box sx={{ display: 'flex', gap: '1rem' }}>
							<Button>Shuffle</Button>
							<Button>Add to library</Button>
						</Box> */}
					</Box>
				</Grid>
			</Grid>
		</div>
	)
}

export default SongsSection
/* {
	"id": "6e845b68-ffcf-4127-9cdb-0dee216b1591",
	"title": "Studious Join",
	"description": "Ab nihil sequi quos maiores sit dicta laborum.\nVeritatis quasi dolorem molestiae.\nOdit necessitatibus nam consectetur sequi repellat.",
	"follows": 3071,
	"image": "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
	"slug": "studious-join",
	"songs": [
		{
			"id": "0aa327da-f1db-4f70-99c3-c15ccb014056",
			"title": "School's Out",
			"artists": [
				"Jake Kuvalis",
				"Jerry Lubowitz",
				"Ernest Goodwin IV"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 77650,
			"image": "https://images.pexels.com/photos/10163188/pexels-photo-10163188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 40937
		},
		{
			"id": "6bab1386-8f75-4f30-9bdc-6acb69ed8d16",
			"title": "Call Me",
			"artists": [
				"Denise Hoeger",
				"Lena Goodwin"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 17347,
			"image": "https://images.pexels.com/photos/4652004/pexels-photo-4652004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 54586
		},
		{
			"id": "67478402-1f26-4b1e-b1fa-46f71c402acc",
			"title": "Glamorous",
			"artists": [
				"Lucas Dach",
				"Mrs. Dana Nader",
				"Rodney Hermiston"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 46708,
			"image": "https://images.pexels.com/photos/248510/pexels-photo-248510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 49322
		},
		{
			"id": "269322a1-f6af-4ccb-b667-f07ca01f2ca7",
			"title": "Where Did Our Love Go",
			"artists": [
				"Mr. Perry Powlowski"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 74175,
			"image": "https://images.pexels.com/photos/998499/pexels-photo-998499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 56400
		},
		{
			"id": "30516a58-8b7c-4a36-9cc3-215ae30cd9ae",
			"title": "Surfin' USA",
			"artists": [
				"Ronald Robel",
				"Terrence Zulauf",
				"Flora Turner"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 30018,
			"image": "https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 36706
		},
		{
			"id": "672b650e-3ce1-43ce-bb9d-cfc191580b26",
			"title": "Sunshine Superman",
			"artists": [
				"Vernon Emmerich"
			],
			"genre": {
				"key": "rock",
				"label": "Rock"
			},
			"likes": 79725,
			"image": "https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 58618
		},
		{
			"id": "c8a11920-6484-47ce-8083-eba1b8751aa4",
			"title": "That's the Way Love Goes",
			"artists": [
				"Garry Armstrong",
				"Marjorie Stehr"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 94491,
			"image": "https://images.pexels.com/photos/10042038/pexels-photo-10042038.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 44244
		},
		{
			"id": "201e3f58-35b6-403a-b7b7-f89c03a9ea8d",
			"title": "Long Tall Sally",
			"artists": [
				"Carol Bauch",
				"Angelina Fahey V"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 79838,
			"image": "https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 26501
		},
		{
			"id": "4865c3c6-4f6d-4ba2-b4d4-b7c9f1e07e57",
			"title": "Nature Boy",
			"artists": [
				"Don Borer",
				"Hilda Rosenbaum"
			],
			"genre": {
				"key": "rock",
				"label": "Rock"
			},
			"likes": 19526,
			"image": "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 41967
		},
		{
			"id": "3ca31faf-e2ef-4147-8e3b-68b6757db846",
			"title": "Till The End of Time",
			"artists": [
				"Yvonne Walter",
				"Mr. Fannie White"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 66911,
			"image": "https://images.pexels.com/photos/1574181/pexels-photo-1574181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 42931
		},
		{
			"id": "2d824f03-fc5d-4c65-a051-6e22beee0a89",
			"title": "Stars & Stripes Forever",
			"artists": [
				"Jermaine Gleason",
				"Dr. Brad Ward",
				"Angie Hyatt"
			],
			"genre": {
				"key": "rock",
				"label": "Rock"
			},
			"likes": 57428,
			"image": "https://images.pexels.com/photos/1886641/pexels-photo-1886641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 49727
		},
		{
			"id": "2efc35f9-3f36-426e-a27e-07eb0cb35de8",
			"title": "Will It Go Round In Circles",
			"artists": [
				"Nicholas Nicolas IV"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 73391,
			"image": "https://images.pexels.com/photos/2539076/pexels-photo-2539076.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 44937
		},
		{
			"id": "8482327b-9d87-4e9b-b3b8-e506e018d9a3",
			"title": "Smoke On the Water",
			"artists": [
				"Mildred Pfeffer",
				"Walter Stark"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 36706,
			"image": "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 35798
		},
		{
			"id": "b16bc092-be9a-4a06-a949-bc7d1e819d0f",
			"title": "Two Hearts",
			"artists": [
				"Mr. Kellie Goldner",
				"Barbara Simonis",
				"Vickie Mayert"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 22132,
			"image": "https://images.pexels.com/photos/3733925/pexels-photo-3733925.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 39437
		},
		{
			"id": "57359e69-894f-4d2d-826d-3126b1ef0d58",
			"title": "I Need You Now",
			"artists": [
				"Juanita Bernier",
				"Kristie Hartmann"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 29781,
			"image": "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 31604
		},
		{
			"id": "9ae9ee8f-9ebf-43f1-ae67-ccd54b833483",
			"title": "Brown Eyed Girl",
			"artists": [
				"Kelli Effertz",
				"Jonathan Lind",
				"Luther Flatley"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 20083,
			"image": "https://images.pexels.com/photos/442580/pexels-photo-442580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 32633
		},
		{
			"id": "cf405aba-52cd-400a-b9f9-878a554cdaef",
			"title": "Are You Lonesome Tonight?",
			"artists": [
				"Marcos Christiansen",
				"Dolores Roob",
				"Eula Larson"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 85089,
			"image": "https://images.pexels.com/photos/10361600/pexels-photo-10361600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 39094
		},
		{
			"id": "88a5e596-6b33-4f94-8dce-0c3a2a9e1de4",
			"title": "Brown Eyed Girl",
			"artists": [
				"Dr. Kyle Howell"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 22876,
			"image": "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 39056
		},
		{
			"id": "fcd400b0-bdfe-48fb-b109-3d4e4aede608",
			"title": "Down",
			"artists": [
				"Santos Jacobi Jr.",
				"Kelvin Heaney",
				"Joanna Cruickshank"
			],
			"genre": {
				"key": "rock",
				"label": "Rock"
			},
			"likes": 83973,
			"image": "https://images.pexels.com/photos/281502/pexels-photo-281502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 48404
		},
		{
			"id": "f0fa27db-75e5-45ef-9707-96dd0e58a569",
			"title": "(Let Me Be Your) Teddy Bear",
			"artists": [
				"Miss Shannon Murray",
				"Miss Grace Hammes",
				"Julius Durgan"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 15057,
			"image": "https://images.pexels.com/photos/373584/pexels-photo-373584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 25400
		},
		{
			"id": "35d31473-7e1a-41e8-abb4-d8d564adda11",
			"title": "ABC",
			"artists": [
				"Kim Walsh",
				"Sonia Bogan"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 46509,
			"image": "https://images.pexels.com/photos/2236602/pexels-photo-2236602.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 27128
		},
		{
			"id": "c6fbdcfc-36c9-4ea0-b401-11abda8e12ef",
			"title": "The Girl From Ipanema",
			"artists": [
				"Sheila Schroeder"
			],
			"genre": {
				"key": "rock",
				"label": "Rock"
			},
			"likes": 73964,
			"image": "https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 30597
		},
		{
			"id": "07d05216-c293-4a0b-b79a-7b1057a47ae8",
			"title": "If (They Made Me a King)",
			"artists": [
				"Bert Osinski",
				"Brendan Predovic Jr.",
				"Eileen Moen"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 44640,
			"image": "https://images.pexels.com/photos/10529975/pexels-photo-10529975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 48350
		},
		{
			"id": "ed9dd070-57ad-449f-b896-019ceba2a827",
			"title": "I Only Have Eyes For You",
			"artists": [
				"Roy Feeney",
				"Janet Block PhD",
				"Harvey Feest II"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 38238,
			"image": "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 59545
		},
		{
			"id": "d281ce7e-4f19-44b3-bf1e-abc21f8616ba",
			"title": "Shop Around",
			"artists": [
				"Mrs. Anthony Dicki",
				"Ken Orn II",
				"Nichole Reichel"
			],
			"genre": {
				"key": "rock",
				"label": "Rock"
			},
			"likes": 74658,
			"image": "https://images.pexels.com/photos/2309266/pexels-photo-2309266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 27763
		},
		{
			"id": "fd663d6c-a738-4f7c-be33-e97bdef57bbd",
			"title": "Let's Hear it For the Boy",
			"artists": [
				"Louis Upton MD",
				"Miriam Barrows"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 5573,
			"image": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 36523
		},
		{
			"id": "7b3a8017-e10b-4c48-86d7-5c28a1fd82f1",
			"title": "Smoke! Smoke! Smoke! (That Cigarette)",
			"artists": [
				"Desiree Dickinson"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 60634,
			"image": "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 27151
		},
		{
			"id": "cd911e81-cabb-4a56-9e89-f682d3cc4d5a",
			"title": "Tik-Toc",
			"artists": [
				"Jennie Gleason"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 29669,
			"image": "https://images.pexels.com/photos/1493004/pexels-photo-1493004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 58402
		},
		{
			"id": "33a0cdb5-ee12-46db-a642-afe84659f630",
			"title": "Doo Wop (That Thing)",
			"artists": [
				"Becky Wolff"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 75990,
			"image": "https://images.pexels.com/photos/237321/pexels-photo-237321.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 54980
		},
		{
			"id": "82a27bd3-b620-4c45-9772-ba763935ca23",
			"title": "School's Out",
			"artists": [
				"Dominick Muller"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 44263,
			"image": "https://images.pexels.com/photos/280490/pexels-photo-280490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 42247
		},
		{
			"id": "0696f9fd-7446-4157-b877-d30ab903d4a2",
			"title": "Respect",
			"artists": [
				"Guadalupe Rolfson",
				"Steve Labadie"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 86426,
			"image": "https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 34299
		},
		{
			"id": "2278bc61-ce79-4586-8b72-1328f4e17ffd",
			"title": "This Love",
			"artists": [
				"Rickey Larkin",
				"Ms. Judy Crooks"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 36239,
			"image": "https://images.pexels.com/photos/333645/pexels-photo-333645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 45599
		},
		{
			"id": "116b9d12-758f-497e-a728-74c3b7287eb5",
			"title": "(Just Like) Starting Over",
			"artists": [
				"Marjorie Schinner",
				"Shane Harris",
				"Brent Mertz"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 73141,
			"image": "https://images.pexels.com/photos/80453/poppy-field-of-poppies-flower-flowers-80453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 59710
		},
		{
			"id": "f0fa27db-75e5-45ef-9707-96dd0e58a569",
			"title": "(Let Me Be Your) Teddy Bear",
			"artists": [
				"Miss Shannon Murray",
				"Miss Grace Hammes",
				"Julius Durgan"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 15057,
			"image": "https://images.pexels.com/photos/373584/pexels-photo-373584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 25400
		},
		{
			"id": "fad3aae9-0384-4f1f-86e2-5164bf368a26",
			"title": "You Don't Have to Be a Star (To Be in My Show)",
			"artists": [
				"Clarence Herman",
				"Mr. Earnest Armstrong"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 14138,
			"image": "https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 26277
		},
		{
			"id": "fd9a4913-65c8-424c-893c-23443ac0c580",
			"title": "Whispering",
			"artists": [
				"Guadalupe Funk"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 94126,
			"image": "https://images.pexels.com/photos/3971983/pexels-photo-3971983.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 35289
		},
		{
			"id": "c2c183f2-4a30-4359-8b72-4dfdd24cf975",
			"title": "Low",
			"artists": [
				"Mike Franecki"
			],
			"genre": {
				"key": "rock",
				"label": "Rock"
			},
			"likes": 43090,
			"image": "https://images.pexels.com/photos/301395/pexels-photo-301395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 29549
		},
		{
			"id": "43914551-9852-49af-ab33-3ec64c56ff61",
			"title": "Crimson & Clover",
			"artists": [
				"Tyler Botsford"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 89997,
			"image": "https://images.pexels.com/photos/462119/pexels-photo-462119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 51223
		},
		{
			"id": "80492b0f-963f-4192-a040-53af17a8678f",
			"title": "Grease",
			"artists": [
				"Max Lind",
				"Verna Borer"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 31469,
			"image": "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 42419
		},
		{
			"id": "a4ec6448-d09a-4e12-aae5-b566ab34d137",
			"title": "Like a Rolling Stone",
			"artists": [
				"Ms. Virgil Champlin",
				"Brenda Weber"
			],
			"genre": {
				"key": "blues",
				"label": "Blues"
			},
			"likes": 34064,
			"image": "https://images.pexels.com/photos/1004366/pexels-photo-1004366.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 47151
		},
		{
			"id": "4b02d97c-7fc3-4adb-aef7-03b01a156f5d",
			"title": "Pistol Packin' Mama",
			"artists": [
				"Kent Predovic",
				"Ms. Mary Mante"
			],
			"genre": {
				"key": "jazz",
				"label": "Jazz"
			},
			"likes": 77536,
			"image": "https://images.pexels.com/photos/2225213/pexels-photo-2225213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 47811
		},
		{
			"id": "d29a2402-14d7-4fdd-93a5-8d6de6f409df",
			"title": "Oh",
			"artists": [
				"Ms. Beatrice Wyman"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 49541,
			"image": "https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 50034
		},
		{
			"id": "80492b0f-963f-4192-a040-53af17a8678f",
			"title": "Grease",
			"artists": [
				"Max Lind",
				"Verna Borer"
			],
			"genre": {
				"key": "pop",
				"label": "Pop"
			},
			"likes": 31469,
			"image": "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			"durationInMs": 42419
		}
	]
} */