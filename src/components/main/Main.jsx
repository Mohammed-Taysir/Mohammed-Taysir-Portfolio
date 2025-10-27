import React from 'react'

import { Box, Container, Typography } from '@mui/material'
import Home from '../home/Home'
import ParticlesBackground from '../particles/ParticlesBackground'
import Navbar from '../navbar/Navbar'


function Main() {
    return (
        <div>

            <ParticlesBackground />
            <Navbar />
            <Container maxWidth='lg'>

                <Home />
            </Container>
        </div>
    )
}

export default Main