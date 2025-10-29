import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import SectionTitle from '../section-title/SectionTitle'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Stat from './Stat';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';


function Stats() {
  const theme = useTheme();
  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
 
  return (
    <Box

    component={'section'} py = {4} sx = {{
      
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}>
      <SectionTitle  >
        <Typography color={theme.palette.text.primary} fontSize="1.5rem">Statistics</Typography>
        <EqualizerIcon sx={{
          color: theme.palette.primary.main
        }} />
      </SectionTitle>
      <Box  sx = {{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        width: '100%'

      }}>
        <Stat delay={0} num = {22} title = {"Age"}  />
        <Stat delay={0.5} num = {1} title = {"Year Of Experince"}  />
        <Stat delay={1} num = {3} title = {"Total Big Projects"}  />
        <Stat delay={1.5} num = {1} title = {"Clients"}  />
      </Box>

      <MotionBox
      initial = {{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition = {{
          delay: 1.5,
          duration: 0.5
        }}
       display={'flex'} flexDirection={'column'} gap = {2} alignItems={'center'}>
        <Typography
        
        color = {theme.palette.text.secondary} align='center' lineHeight={'1.6'}>I’m a results-driven software engineer with a strong ability to communicate ideas clearly and collaborate effectively across teams. I thrive in fast-paced, dynamic settings where creativity and precision go hand in hand. Whether working independently or leading a project, I take pride in delivering high-quality solutions that make an impact. I’m always eager to embrace new technologies, overcome challenges, and continue evolving both technically and professionally.
      </Typography>
      <Button 
      component = {'a'} href = "https://github.com/Mohammed-Taysir" target = '_blank' variant='contained' sx = {{
        textTransform: 'capitalize',
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        letterSpacing: '1px',
        borderRadius: 2,
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 3,
        py: 2

      }} size = 'large' fontWeight = 'normal' >Show GitHub <GitHubIcon /> </Button>
      </MotionBox>

    </Box>
  )
}

export default Stats