import CardComponent from './CardComponent'
import 'swiper/css';           // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles
import { Swiper, SwiperSlide } from 'swiper/react';  // React Swiper components
import { Navigation, Pagination } from 'swiper/modules';
import './Section.css'
const Carousel = ({ albums }) => {
    return (
        <Swiper style={{ margin: '0 1rem' }}
            modules={[Navigation, Pagination]} // Enable navigation and pagination
            spaceBetween={30}                  // Spacing between slides
            slidesPerView={5}                  // Show 3 items per view
            navigation                         // Enable navigation (Prev/Next buttons)
            pagination={{ clickable: true }}   // Enable pagination (dots)
            loop={true}                        // Enable continuous loop mode
        >
            {albums.map((album) => (
                <SwiperSlide key={album.id}>
                    <CardComponent album={album} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel
