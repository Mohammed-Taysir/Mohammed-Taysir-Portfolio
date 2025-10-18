import React from 'react'
import Home from './components/home/Home'
import ParticlesBackground from './components/particles/ParticlesBackground'
import { Box, Typography } from '@mui/material'

function App() {
  return (
    <div>
      
        <ParticlesBackground  />
     
      <Box sx = {{
        position: 'relative',
        zIndex: 999,
      }} component={'main'} >
       <Home />
      </Box>
    </div>
  )
}

export default App