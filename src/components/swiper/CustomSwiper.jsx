import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useRef } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';






function CustomSwiper({text, total,children}) {
    const theme = useTheme();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);


    return (
        <Box pb={5}>
                <Swiper

                    
                    
                    style={{ overflow: 'visible' }}

                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 35
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        }
                    }}
                    modules={[Navigation, Pagination]} className="mySwiper">
                    {children}
                </Swiper>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems={'center'} spacing = {1}>
                        <Typography fontWeight={'bold'} >{text}:</Typography>
                        <Typography color = {theme.palette.primary.main} fontWeight = 'bold'>{total}</Typography>
                    </Stack>
                    <Box className="swiper-navigation" sx={{
                    display: 'flex',
                    gap: 4,
                    alignItems: 'center',
                   
                }}>
                    <Box className="custom-prev"
                        ref={prevRef}
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: `1px solid ${theme.palette.primary.main}`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: "pointer"
                        }}><KeyboardArrowLeftIcon /></Box>
                    <Box className="custom-next"
                        ref={nextRef}
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: `1px solid ${theme.palette.primary.main}`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: "pointer"
                        }}><KeyboardArrowRightIcon /></Box>
                </Box>
                </Stack>
            </Box>
    )
}

export default CustomSwiper