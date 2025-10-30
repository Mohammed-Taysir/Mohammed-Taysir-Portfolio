import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

function Icon( {children}) {

    const MotionBox = motion(Box);
  return (
    <MotionBox
        animate = {{
            y: [0, -10,  0],
            scale: [1, 1.2, 1]
        }}

        transition = {{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }}
    sx = {{
        bgcolor: '#bbf7d0',
        width:"50px",
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {children}
    </MotionBox>
  )
}

export default Icon