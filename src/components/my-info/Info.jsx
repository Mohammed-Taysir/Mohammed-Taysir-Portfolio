import { Box, Button, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion';
import React from 'react'

import { ReactTyped } from "react-typed";
import MotionButton from '../animation/MotionButton';
import Icons from './Icons';
function Info() {
  const theme = useTheme();

  const isMidScreen = useMediaQuery('(max-width: 999px)');
  const isLargeScreen = useMediaQuery('(max-width: 1070px)');
  const isSmallScreen = useMediaQuery('(max-width: 450px)');

  const MotionBox = motion(Box);
  const ButtonMotion = motion(Button)
  




  return (
    <MotionBox overflow = {'hidden'}  initial={{ x: -100, opacity: 0 }} whileInView={{
      x: 0, opacity: 1, transition: {
        duration: 0.5
      }
    }} width={isMidScreen ? "100%" : isLargeScreen ? "50%" : "60%"} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMidScreen && "center",
      gap: 2,
      p: 1
    }} >
      

      <Box display={'flex'} alignItems={'center'} gap={1} >
        <Box display={'flex'} alignItems={'center'}>
          <Typography fontSize={isSmallScreen ? "1.6rem" : '2rem'} fontWeight={'bold'}>I</Typography>
          <Typography fontSize={isSmallScreen ? "1.6rem" : '2rem'} fontWeight='bold' color={theme.palette.primary.main}>'</Typography>
          <Typography fontSize={isSmallScreen ? "1.6rem" : '2rem'} fontWeight='bold'>m</Typography>
        </Box>
        <ReactTyped strings={["Eng. Mohammed Taysir Alkhatib", "A Front End Web Developer"]} typeSpeed={95} style={{
          fontSize: isSmallScreen ? "1.3rem" : '2rem',
          fontWeight: 'bold',
          color: theme.palette.primary.main,
          alignSelf: 'center'
        }} loop />
      </Box>

      <Box>
        <Typography textAlign={isMidScreen && 'center'} lineHeight={'1.7'} color={theme.palette.text.secondary} mb={1} >Highly motivated Front-End Developer skilled in HTML, CSS, JavaScript, Bootstrap, React, and MUI. Experienced in building responsive, user-friendly web applications with clean and maintainable code. Strong understanding of data structures and algorithms for optimized, scalable solutions. Expanding back-end expertise in ASP.NET Core. Proficient in Python, Java, C++, and C#. Collaborative team player delivering high-quality projects on time.</Typography>
        
      </Box>

      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <ButtonMotion onClick={() => {
          window.open('/cv.pdf', '_blank')
        }} style={{
          textTransform: 'capitalize',
          color: theme.palette.text.primary
        }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          variant='contained'
          size='large'
        >View Cv</ButtonMotion>

        <ButtonMotion component = {Link} href = '#stats' sx={{
          textTransform: 'capitalize',
          color: theme.palette.primary.main,
          bgcolor: theme.palette.text.primary
        }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          variant='contained'
          size='large'
        >More Info</ButtonMotion>
      </Stack>

      <Icons />

    </MotionBox>
  )
}

export default Info