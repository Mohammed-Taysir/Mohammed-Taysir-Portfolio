import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import CodeOffIcon from '@mui/icons-material/CodeOff';

function Footer() {
  const theme = useTheme();
  return (
    <Box px = {1}>
      <Box 
      sx = {{
        position: 'relative',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: 1,
        borderRadius: 50,
        py: 2,
        px: 6,
        boxShadow: `0 -5px 0px ${theme.palette.primary.main}`,
        
      }}
    >
     <Box display={'flex'} gap = {2} alignItems={'center'}>
        <CodeOffIcon  />
       <Typography fontSize = '1.2rem' color = {theme.palette.primary.main} fontWeight = 'bold'>Mohammed Alkhatib</Typography>
     </Box>
      <Typography fontSize = "15px">Copy Right &copy; {new Date().getFullYear()} - All Rights Reserved</Typography>
    </Box>
    </Box>
  )
}

export default Footer