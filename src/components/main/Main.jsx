
import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Home from '../home/Home'
import Navbar from '../navbar/Navbar'

function Main() {
  
  return (
    <Box sx = {{
        position: 'relative',
        zIndex: 999,
      }} component={'main'} >
        <Home />
      </Box>
  )
}

export default Main