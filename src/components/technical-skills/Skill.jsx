import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

function Skill({title, description, icon, order}) {
    const Icon = icon;
    const theme = useTheme();
    const isLarge = useMediaQuery('(max-width: 1120px)');
  return (
    <Stack direction={isLarge? 'column' :'row'} alignItems={'center'} gap = {isLarge ? 2: 4} flexGrow={1} width = {'100%'} maxWidth={'100%'}>
        <Box order = {!isLarge && order} sx = {{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            bgcolor: theme.palette.background.paper,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: `1px solid ${theme.palette.primary.main}`
        }}><Icon sx = {{color: theme.palette.primary.main}} /></Box>
        <Stack spacing = {0.5}>
            <Typography sx = {{
              ...(isLarge? {textAlign: 'center'}: {})
            }} component={'h4'} variant = 'h6' fontWeight = 'normal' fontSize={'20px'}>{title}</Typography>
            <Typography sx = {{
              ...(isLarge? {textAlign: 'center'}: {})
            }} width = {230} color = {theme.palette.text.secondary} fontSize>{description}</Typography>

        </Stack>


    </Stack>
  )
}

export default Skill