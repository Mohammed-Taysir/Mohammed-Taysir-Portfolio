import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
function Info() {
  const theme = useTheme();

  const isMidScreen = useMediaQuery('(max-width: 999px)');
  const isLargeScreen = useMediaQuery('(max-width: 1070px)');
  const isSmallScreen = useMediaQuery('(max-width: 450px)');
 
  

  
  return (
    <Box width={isMidScreen? "100%": isLargeScreen ? "50%": "60%"} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMidScreen && "center" ,
      gap: 2
    }} >
      <Typography sx={{
        fontSize: '16px',
        fontWeight: 'bold'
      }}>Hello 👋,</Typography>

      <Box display={'flex'} alignItems={'center'} gap={1} >
        <Box display={'flex'} alignItems={'center'}>
          <Typography fontSize={isSmallScreen?"1.6rem": '2rem'} fontWeight={'bold'}>I</Typography>
          <Typography fontSize={isSmallScreen?"1.6rem": '2rem'} fontWeight='bold' color={theme.palette.primary.main}>'</Typography>
          <Typography fontSize={isSmallScreen?"1.6rem": '2rem'} fontWeight='bold'>m</Typography>
        </Box>
        <ReactTyped strings={["Eng. Mohammed Taysir Alkhatib", "A Front End Web Developer"]} typeSpeed={95} style={{
          fontSize: isSmallScreen?"1.3rem": '2rem',
          fontWeight: 'bold',
          color: theme.palette.primary.main,
          alignSelf: 'center'
        }} loop />
      </Box>

      <Box>
        <Typography textAlign={isMidScreen && 'center'} lineHeight={'1.7'} color = {theme.palette.text.secondary} mb = {1} >Highly motivated Front-End Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, React, and MUI. Skilled in building responsive and user-friendly web applications with clean, efficient, and maintainable code. Possess a solid understanding of data structures and algorithms, enabling the development of optimized and scalable solutions. Continuously expanding expertise in back-end development using ASP.NET Core.</Typography>
        <Typography textAlign={isMidScreen && 'center'} lineHeight={'1.7'} color = {theme.palette.text.secondary} >Proficient in multiple programming languages, including Python, Java, C++, and C#, with a passion for learning new technologies and improving software development skills. Adept at collaborating in dynamic teams and delivering high-quality projects on time.</Typography>
      </Box>

      <Stack direction={'row'} alignItems={'center'} spacing = {2}>
        <Button component = {Link} to = '/cv' target='_blank' variant='contained' size='large' sx={{
          textTransform: 'capitalize',
          color: theme.palette.text.primary
        }}>View Cv</Button>

        <Button variant='contained' size='large' sx={{
          textTransform: 'capitalize',
          color: theme.palette.primary.main,
          bgcolor: theme.palette.text.primary
        }}>More Info</Button>
      </Stack>

    </Box>
  )
}

export default Info