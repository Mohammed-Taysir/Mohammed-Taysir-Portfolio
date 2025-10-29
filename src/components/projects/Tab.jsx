import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

function Tab({title, isActive}) {
    const theme = useTheme();
  return (
    <Box 
        p = {"10px"} 
        sx = {{
            cursor: 'pointer',
            bgcolor: theme.palette.background.paper,
            borderRadius: 2,
            ":hover": {
                bgcolor: theme.palette.primary.main
            },
            ":hover .title": {
                color: "#fff"
            }
        }}
    >
        <Typography className = 'title' fontSize = "13px" fontWeight={'normal'}>{title}</Typography>
    </Box>
  )
}

export default Tab