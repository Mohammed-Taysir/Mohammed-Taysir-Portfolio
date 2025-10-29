import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

function TwoWordsTitle({first, icon, last}) {
    const theme = useTheme();
    const Icon = icon;
  return (
    <Box display={'flex'} alignItems={'center'} gap = {1} flexWrap={'wrap'}>
        <Typography color={theme.palette.text.primary} fontSize="1.5rem">{first}</Typography>
        <Icon sx={{
                    color: theme.palette.primary.main
        }} />
        <Typography color={theme.palette.text.primary} fontSize="1.5rem">{last}</Typography>
    </Box>
  )
}

export default TwoWordsTitle