import React from 'react'

import { Box, Container, Typography } from '@mui/material'
import Home from '../home/Home'
import ParticlesBackground from '../particles/ParticlesBackground'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'


function Main() {
    return (
        <div>

            <ParticlesBackground />
            <Navbar />
            <Container maxWidth='lg'>

                <Home />
            </Container>
            <Footer />
        </div>
    )
}

export default Main