import React from 'react'
import Home from './components/home/Home'
import ParticlesBackground from './components/particles/ParticlesBackground'
import { Box, Container, Typography } from '@mui/material'

import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Main from './components/main/Main'
import PdfViewr from './components/pdf-viewr/PdfViewr'

function App() {
  return (
    <>
      <Routes>
        <Route path = '/'  element = {<Main />}/>
        <Route path = '/cv' element = {<PdfViewr />} />
      </Routes>
    
    </>
  )
}

export default App