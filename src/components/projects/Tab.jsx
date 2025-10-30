import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'






function Tab({title, selected, onSelect, onFilter}) {
    const theme = useTheme();
  return (
    <Box
    onClick = {() => {
        onFilter(title)
        onSelect(title)
    }} 
        p = {"10px"} 
        sx = {{
            cursor: 'pointer',
            bgcolor:selected == title? theme.palette.primary.main : theme.palette.background.paper,
            color: selected == title? theme.palette.hoverColor: theme.palette.text.primary,
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