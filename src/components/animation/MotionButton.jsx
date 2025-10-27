import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

function MotionButton({styleCss, handleClick, children}) {
    const ButtonMotion = motion(Button);
  return (
    <ButtonMotion 
    whileHover = {{scale: 1.1}}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    variant='contained'
    size='large'
    onClick = {()=> {
        handleClick()
    }}
    sx = {
       styleCss
    } >

        {children}

    </ButtonMotion>
  )
}

export default MotionButton