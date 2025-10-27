import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import image from "../../assets/my-photo.jpg"
import { motion } from 'framer-motion';

function MainImage() {
  const theme = useTheme();
  const isMidScreen = useMediaQuery('(max-width: 999px)');
  const MotionBox = motion(Box);
  return (
    <MotionBox
    initial = {{x: 100, opacity: 0}} 
    whileInView={{x: 0, opacity: 1, transition: {
      duration: 2
    }}}
      sx={{
        perspective: '800px',
        bgcolor: theme.palette.primary.main,
        p: 2,
        borderRadius: '50%',
        width: 400,
        order: isMidScreen && -1,
        maxWidth: '100%'
    

      }}
    >
      <Box
        component={'img'}
        src={image}
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'rotateY(20deg) rotateX(10deg)', // ← هذا يفعّل الـperspective عند التحريك
          }
        }}
      />
    </MotionBox>
  );

}

export default MainImage