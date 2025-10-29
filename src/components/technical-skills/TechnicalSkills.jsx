import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import SectionTitle from '../section-title/SectionTitle'
import MemoryIcon from '@mui/icons-material/Memory';
import HexLoader from '../hexloader/HexLoader';
import Skill from './Skill';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TwoWordsTitle from '../section-title/TwoWordsTitle';
  const leftSkills = [
    {
      title: 'Programming Languages',
      desc: ['JavaScript', 'C# (Learning)', 'Java', 'C++', 'Python'],
    },
    {
      title: 'Front-end',
      desc: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'MUI', 'Framer Motion'],
    },
    {
      title: 'Back-end (Learning)',
      desc: [
        'Learning ASP.NET basics',
        'Understanding MVC pattern',
        'Working with simple APIs',
        'Introduction to SQL Server',
      ],
    },
  ];

  // 🧩 مهارات الجهة اليمنى
  const rightSkills = [
    {
      title: 'API Fundamentals',
      desc: [
        'Understanding REST principles',
        'Using JSON in web apps',
        'Testing endpoints with Postman',
      ],
    },
    {
      title: 'Version Control',
      desc: ['Git', 'GitHub', 'Basic CI/CD knowledge'],
    },
    {
      title: 'Deployment (Beginner)',
      desc: ['Working with IIS', 'Deploying React apps', 'Exploring Azure basics'],
    },
  ];





function TechnicalSkills() {
    const theme = useTheme();
    const isLarge = useMediaQuery('(max-width: 1120px)');
    return (
        <Box id = {'technical'} py={5} display={'flex'} flexDirection={'column'} gap={5} >
            <SectionTitle>
                <TwoWordsTitle first = 'Technical' last = 'Skills' icon = {MemoryIcon} />
            </SectionTitle>

            <Stack direction={isLarge? "column" :'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap = {'wrap'}>
                <Box 
                sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    gap: 4
                 }}>

                    <Skill title={'Programming Languages'} description={'Js - C# - Java - C++ - Python'} icon={CodeOutlinedIcon} order={2}  />
                    <Box sx = {{
                        transform: !isLarge ? 'translateX(-30px)': 'translateX(0)'
                    }}>
                        <Skill title={'Front-end'} description={'Html-Css-Js-Bootstrap-React-MUI-FramerMotion'} icon={CodeOffOutlinedIcon} order={2} />
                    </Box>
                    <Skill title={'Front-end'} description={'Html-Css-Js-Bootstrap-React-MUI-FramerMotion'} icon={CodeOffOutlinedIcon} order={2} />

                </Box>

                <Box  my = {10} width = {200} height = {200} position = 'relative' >
                    <HexLoader />
                </Box>

                 <Box sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                 }}>

                    <Skill title={'Front-end'} description={'Html-Css-Js-Bootstrap-React-MUI-FramerMotion'} icon={CodeOffOutlinedIcon} order={-1} />
                    <Box sx = {{
                        transform: !isLarge ? 'translateX(30px)': 'translateX(0)'
                    }}>
                        <Skill title={'Front-end'} description={'Html-Css-Js-Bootstrap-React-MUI-FramerMotion'} icon={CodeOffOutlinedIcon} order={-1} />
                    </Box>
                    <Skill title={'Front-end'} description={'Html-Css-Js-Bootstrap-React-MUI-FramerMotion'} icon={CodeOffOutlinedIcon} order={-1} />

                </Box>


            </Stack>


        </Box>
    )
}

export default TechnicalSkills