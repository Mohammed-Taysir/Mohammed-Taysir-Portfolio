import { Box, Chip, Link, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { motion } from 'framer-motion';

function Project({project}) {
    const theme = useTheme();
    const MotionBox = motion(Box);
  return (
    <MotionBox
    initial = {{y: 100, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{
        delay: 0.3,
        duration: 0.5
    }}
     position={'relative'} borderRadius={2} overflow={'hidden'} mt = {5} sx = {{
        ":hover .overlay": {
            display: 'block'
        },
        ":hover .show-text": {
            display: 'flex'
        },
        ":hover .image": {
            scale: 1.2
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
            transition: '0.5s display',
            zIndex: 999
        }} />

        <Box component={'img'} className='image' src = {project.image} width = '100%' height = '100%' borderRadius = {2} sx = {{
            transition: '0.5s'
        }}  />
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

    </MotionBox>
  )
}

export default Project