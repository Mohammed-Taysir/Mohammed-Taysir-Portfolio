import { Box } from '@mui/material'
import React from 'react'
import MyInfo from '../my-info/MyInfo'
import Stats from '../stats/Stats'
import TechnicalSkills from '../technical-skills/TechnicalSkills'

function Home() {
  return (
    <Box sx = {{
        position: 'relative',
        zIndex: 999,
      }} component={'main'} >
        <MyInfo />
        <Stats />
        <TechnicalSkills />
      </Box>
  )
 
}

export default Home