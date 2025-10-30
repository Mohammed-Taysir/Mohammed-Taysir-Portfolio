import { Box, Chip, Link, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function Project({project}) {
    const theme = useTheme();
  return (
    <Box position={'relative'} borderRadius={2} overflow={'hidden'} mt = {5} sx = {{
        ":hover .overlay": {
            display: 'block'
        },
        ":hover .show-text": {
            display: 'flex'
        }
    }}>
        <Box className = 'overlay' sx = {{
            display: 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            bgcolor: 'rgba(0, 128, 0, 0.45)',
            transition: '0.5s display'
        }} />

        <Box component={'img'} src = {project.image} width = '100%' height = '100%' borderRadius = {2}  />
        <Box className = "show-text" position={'absolute'} sx = {{
            transition: '0.5s display',
            bottom: 20,
            left: 20,
            zIndex: 9999,
            display: 'none',
            flexDirection: 'column',
            gap: 1
            }} >

            <Typography component={'h4'} fontSize = "1.2rem" fontWeight = 'bold' color = "#fff">{project.name}</Typography>
            <Stack direction = {'row'} alignItems={'center'} spacing = {2}>
                <Link href = {project.github} target = "_blank" sx = {{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: "#fff",
                    ":hover": {
                        color: theme.palette.primary.main
                    }
                }}><GitHubIcon fontSize = 'small' /> Github</Link>
                <Link href = {project.live} target = "_blank" sx = {{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: "#fff",
                    ":hover": {
                        color: theme.palette.primary.main
                    }
                }}><RemoveRedEyeOutlinedIcon fontSize = 'small' /> Demo</Link>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} spacing = {1}>
                {project.technologies.map(tech => (<Chip key = {tech}  label = {tech} color = {theme.palette.background.paper}/>))}

            </Stack>

        </Box>

    </Box>
  )
}

export default Project