import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react'

function OneWordTitle({title, icon}) {
    const Icon = icon;
    const theme = useTheme();
    return (
        <Box display = 'flex' alignItems = 'center' gap = {1}>
            <Typography color={theme.palette.text.primary} fontSize="1.5rem">{title}</Typography>
            <Icon sx={{
                color: theme.palette.primary.main
            }} />
        </Box>
    )
}

export default OneWordTitle