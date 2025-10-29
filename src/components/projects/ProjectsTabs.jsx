import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from './Tab';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules




const tabs = [
    'All', "Real Websites", "E-commerce Websites", "Landing Pages"
]

function ProjectsTabs() {

    return (
        <Box>

            <Box display={'flex'} gap={2} justifyContent={'center'}>
                {
                    tabs.map(tab => (<Tab title={tab} />))
                }

            </Box>

            <Box>
                <Swiper
                slidesPerView={2}
                 navigation={true}
                 pagination = {{clickable: true}}
                 modules={[Navigation, Pagination]} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Box>



        </Box>
    )
}

export default ProjectsTabs