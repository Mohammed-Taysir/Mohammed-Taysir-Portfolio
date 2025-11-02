import { Box } from '@mui/material'
import React from 'react'
import SectionTitle from '../section-title/SectionTitle'
import TwoWordsTitle from '../section-title/TwoWordsTitle'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CustomSwiper from '../swiper/CustomSwiper';
import { SwiperSlide } from 'swiper/react';
import Review from './Review';


const testimonials = [
  {
    id: 1,
    name: "Sara Al-Hassan",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Working with Eng. Mohammad Al-Khatib was an absolute pleasure! His attention to detail and professionalism are truly outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Khalil",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Eng. Mohammad Al-Khatib provided exceptional service. He understood my needs perfectly and delivered beyond expectations.",
    rating: 4,
  },
  {
    id: 3,
    name: "Layla Nasser",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    message:
      "I’m really impressed by Eng. Mohammad Al-Khatib’s expertise and communication. He made everything so easy and smooth.",
    rating: 5,
  },
  {
    id: 4,
    name: "Omar Saleh",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    message:
      "Eng. Mohammad Al-Khatib is a true professional. His technical skills and creative approach are top-notch!",
    rating: 5,
  },
  {
    id: 5,
    name: "Nour Hassan",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    message:
      "Amazing experience! Eng. Mohammad Al-Khatib is reliable, talented, and delivers excellent results every time.",
    rating: 4,
  },
];
function CustomerReviews() {
  return (
    <Box py = {5} display={'flex'} flexDirection={'column'} gap = {10}>
        <SectionTitle>
            <TwoWordsTitle first = "Customer" last = "Reviews" icon = {StarBorderOutlinedIcon} />
        </SectionTitle>

        <CustomSwiper text = {"Total Reviews"} total = {testimonials.length}>
            {testimonials.map(testi => (<SwiperSlide key = {testi.id} >
                <Review name = {testi.name} role = {testi.role} image = {testi.image} rating = {testi.rating} message = {testi.message} />
            </SwiperSlide>))}
        </CustomSwiper>

    </Box>
  )
}

export default CustomerReviews