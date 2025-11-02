import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import SectionTitle from '../section-title/SectionTitle'
import TwoWordsTitle from '../section-title/TwoWordsTitle'
import SchoolIcon from '@mui/icons-material/School';
import EducationTabs from './EducationTabs';
function Education() {
  const theme = useTheme();
  return (
    <Box id = "education" py = {5} sx = {{
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}>
      <SectionTitle>
        <TwoWordsTitle first = "Education" last = "Certificates" icon = {SchoolIcon}  />
      </SectionTitle>

      <Typography align = 'center' color = {theme.palette.text.secondary} >My academic journey and professional certifications that have shaped my career path and expertise.</Typography>
      <EducationTabs />

    </Box>
  )
}

export default Education