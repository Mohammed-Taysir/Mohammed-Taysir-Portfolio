import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

function Step({step}) {
    const theme = useTheme();
  return (
    <Box display = "flex" flexDirection={'column'} gap = {2} bgcolor = {theme.palette.background.paper} p = {2} borderRadius = {2} sx = {{
        boxShadow: `0 2px 6px ${theme.palette.shadow.main}`
    }}>
        <Typography variant = 'h5' component={'h3'} sx = {{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: '1.3rem'
        }}>{step.title}</Typography>
        <Stack spacing={1}>
            <Typography>{step.date}</Typography>
            <Typography color = {theme.palette.text.secondary}>{step.description}</Typography>
        </Stack>
    </Box>
  )
}

export default Step