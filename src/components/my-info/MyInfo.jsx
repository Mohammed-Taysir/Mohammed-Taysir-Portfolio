
import { Box, useMediaQuery } from '@mui/material'
import React from 'react'

import MainImage from './MainImage'
import Info from './info';

function MyInfo() {
  const isMidScreen = useMediaQuery('(max-width: 999px)');
  return (
    <Box sx = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isMidScreen? "column": "row" ,
        gap: isMidScreen &&  4,
        py: 8
    }} >
        <Info />
        <MainImage />

    </Box>
  )
}

export default MyInfo