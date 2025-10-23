import React from 'react'
import Home from './components/home/Home'
import ParticlesBackground from './components/particles/ParticlesBackground'
import { Box, Container, Typography } from '@mui/material'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
      
      <ParticlesBackground  />
      <Navbar />
     <Container maxWidth = 'lg'>
       
      <Main />
     </Container>
    </div>
  )
}

export default App