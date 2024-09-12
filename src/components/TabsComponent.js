import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Carousel from './Carousel';
import axios from 'axios';
import { useEffect } from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent({ albums, albumType }) {
  const [value, setValue] = React.useState(0);
  const [genres, setGenres] = React.useState([]);
  const [albumsByGenres, setAlbumsByGenres] = React.useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://qtify-backend-labs.crio.do/genres`);
      const fetchedGenres = res.data.data;

      // Adding "All" genre manually
      const allGenres = [{ key: 'all', label: 'All' }, ...fetchedGenres];
      setGenres(allGenres);

      // Filter albums by genres
      const data = allGenres.map((genre) => {
        const genreAlbums = genre.key === 'all'
          ? albums // If genre is "all", return all albums
          : albums?.filter(album => album.genre.key === genre.key);

        return {
          key: genre.key,
          value: genreAlbums,
        };
      });

      setAlbumsByGenres(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [albums]); // Make sure to refetch when albums change

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', color: 'primary.light' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{ color: 'primary.light' }} value={value} onChange={handleChange} aria-label="basic tabs example">
          {genres.map((genre, idx) => (
            <Tab sx={{ color: 'primary.light' }} key={genre.key} label={genre.label} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </Box>

      {genres.map((genre, idx) => (
        <CustomTabPanel sx={{ p: 0, m: 0 }} key={genre.key} value={value} index={idx}>
          <Carousel albumType={albumType} albums={albumsByGenres[idx]?.value} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
