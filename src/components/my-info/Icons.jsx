import { Box, IconButton, Link, useTheme } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Icons() {
    const theme = useTheme();
  return (
    <Box display={'flex'} gap = {2} alignItems={'center'} flexWrap = 'wrap'>
       <IconButton component = {Link} href = 'https://www.linkedin.com/in/mohammed-t-alkhatib-268453380/' target = "_blank">
            <LinkedInIcon sx = {{
                color: theme.palette.text.secondary
            }} fontSize='large' />
       </IconButton>
       <IconButton component = {Link} href = 'https://www.facebook.com/mohed.k?locale=ar_AR' target = "_blank">
            <FacebookIcon sx = {{
                color: theme.palette.text.secondary
            }} fontSize='large' />
       </IconButton>
       <IconButton component = {Link} href =  'https://wa.me/+970567894494' target = "_blank" >
            <WhatsAppIcon sx = {{
                color: theme.palette.text.secondary
            }} fontSize='large' />
       </IconButton>

    </Box>
  )
}

export default Icons