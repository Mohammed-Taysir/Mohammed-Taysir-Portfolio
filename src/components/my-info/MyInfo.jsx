
import { Box, useMediaQuery } from '@mui/material'
import React from 'react'

import Info from './Info';

import MainImage from './MainImage'


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
    }} component={'section'} >
        <Info />
        <MainImage />

    </Box>
  )
}

export default MyInfo