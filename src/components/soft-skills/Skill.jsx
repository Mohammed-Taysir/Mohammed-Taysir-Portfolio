import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

function Skill({ skill, icon }) {
    const Icon = icon;
    const theme = useTheme();

    return (
        <Box display='flex' gap={1} px={3.5} py={1.5} bgcolor={theme.palette.background.paper} borderRadius={14}>
            <Icon sx={{ color: theme.palette.primary.main }} />
            
            <Typography fontWeight = {'normal'} fontSize = '15px'>{skill}</Typography>
            
        </Box>
    )
}

export default Skill