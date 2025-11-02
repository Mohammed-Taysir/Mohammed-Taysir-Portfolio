import { Box } from '@mui/material'
import React from 'react'
import MyInfo from '../my-info/MyInfo'
import Stats from '../stats/Stats'
import TechnicalSkills from '../technical-skills/TechnicalSkills'
import SoftSkills from '../soft-skills/SoftSkills'
import Projects from '../projects/Projects'
import BlobImage from '../blob-image/BlobImage'
import Contact from '../contact/Contact'
import CustomerReviews from '../customer-reviews/CustomerReviews'
import Education from '../education/Education'



function Home() {
  return (
    <Box sx = {{
        position: 'relative',
        zIndex: 999,
      }} component={'main'} >
        <MyInfo />
        <Stats />
        <TechnicalSkills />
        <SoftSkills />
        <Projects />
        <Education />
        <CustomerReviews />
        <Contact />
        
   
      </Box>
  )
 
}

export default Home