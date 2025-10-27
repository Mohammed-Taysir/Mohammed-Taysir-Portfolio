import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

function LeftMotion({children}) {
    const MotionBox = motion(Box)
  return (
    <MotionBox 
    
    initial = {{x: -100}}
    whileInView={{x: 0}}

    >
        {children}
    </MotionBox>
  )
}

export default LeftMotion