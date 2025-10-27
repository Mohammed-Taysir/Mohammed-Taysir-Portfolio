import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import image from "../../assets/my-photo.jpg"

function MainImage() {
  const theme = useTheme();
  const isMidScreen = useMediaQuery('(max-width: 999px)');
  return (
    <Box
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
    </Box>
  );

}

export default MainImage