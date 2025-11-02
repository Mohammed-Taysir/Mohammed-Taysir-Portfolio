import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from './Tab';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import portfolio from '../../assets/portfolio.png'
import alkhatib from '../../assets/alkhatib.png'
import fynode from '../../assets/fynode.png'
import special from '../../assets/special.png'
import hecto from '../../assets/hecto.png'
import kasper from '../../assets/kasper.png'
import landing from '../../assets/landing.png'
import medo from '../../assets/medo-portfolio.png'
import Project from './Project';


import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@emotion/react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import CustomSwiper from '../swiper/CustomSwiper';

// import required modules




const tabs = [
    'All', "Real Websites", "E-commerce Websites", "Landing Pages"
]



const projects = [
    {
        id: 1,
        name: 'Portfolio',
        categories: ["All", "Landing Pages"],
        image: portfolio,
        technologies: ["ReactJs", "MUI", "Framer Motion", "SwiperJs"],
        live: "https://mohammedtaysirportfolio.onrender.com/",
        github: "https://github.com/Mohammed-Taysir/Mohammed-Taysir-Portfolio.git"
    },
    {
        id: 2,
        name: 'Alkhatib Store',
        categories: ["All", "Real Websites", "E-commerce Websites"],
        image: alkhatib,
        technologies: ["ReactJs", "MUI", "Framer Motion", "SwiperJs"],
        live: "https://alkhatib-store.onrender.com/",
        github: "https://github.com/Mohammed-Taysir/Alkhatib-Store.git"
    },
    {
        id: 3,
        name: 'Fynode Store',
        categories: ["All", "E-commerce Websites"],
        image: fynode,
        technologies: ["Html", "Css", "JavaScript", "Bootstrap", "SwiperJs"],
        live: "https://mohammed-taysir.github.io/E-commerce-Website/",
        github: "https://github.com/Mohammed-Taysir/E-commerce-Website.git"
    },
    {
        id: 4,
        name: 'Special Design',
        categories: ["All", "E-commerce Websites"],
        image: special,
        technologies: ["Html", "Css", "Js"],
        live: "https://mohammed-taysir.github.io/Specail-Design/",
        github: "https://github.com/Mohammed-Taysir/Specail-Design.git"
    },
    {
        id: 5,
        name: 'Hecto Store',
        categories: ["All", "E-commerce Websites", "Landing Pages"],
        image: hecto,
        technologies: ["Html", "Css"],
        live: "https://mohammed-taysir.github.io/Hecto-Project/",
        github: "https://github.com/Mohammed-Taysir/Hecto-Project.git"
    },
    {
        id: 6,
        name: 'Kasper',
        categories: ["All", "Landing Pages"],
        image: kasper,
        technologies: ["Html", "Css"],
        live: "https://mohammed-taysir.github.io/Kasper/",
        github: "https://github.com/Mohammed-Taysir/Kasper.git"
    },
    {
        id: 7,
        name: 'Leon',
        categories: ["All", "Landing Pages"],
        image: landing,
        technologies: ["Html", "Css"],
        live: "https://mohammed-taysir.github.io/Leon/",
        github: "https://github.com/Mohammed-Taysir/Leon.git"
    },
    {
        id: 8,
        name: 'Medo World',
        categories: ["All", "Landing Pages"],
        image: medo,
        technologies: ["Html", "Css"],
        live: "https://mohammed-taysir.github.io/Medo-World/",
        github: "https://github.com/Mohammed-Taysir/Medo-World.git"
    }
]


function ProjectsTabs() {

    const [filterdProjects, setFilteredProjects] = useState(projects);
    const [selected, setSelected] = useState("All");

    const filterPojects = (category) => {
        setFilteredProjects(projects.filter(project => project.categories.includes(category)))
    }
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
        <Box>

            <Box display={'flex'} gap={2} justifyContent={'center'} flexWrap={'wrap'}>
                {
                    tabs.map(tab => (<Tab selected={selected} onSelect={setSelected} onFilter={filterPojects} key={tab} title={tab} />))
                }

            </Box>

            

            <CustomSwiper text = 'Total Projects' total = {projects.length}>
                {
                    filterdProjects.map(project => (<SwiperSlide key={project.id}>
                        <Project project={project} />
                    </SwiperSlide>))
                }
            </CustomSwiper>



        </Box>
    )
}

export default ProjectsTabs