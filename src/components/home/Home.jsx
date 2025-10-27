import { Box } from '@mui/material'
import React from 'react'
import MyInfo from '../my-info/MyInfo'

function Home() {
  return (
    <Box sx = {{
        position: 'relative',
        zIndex: 999,
      }} component={'main'} >
        <MyInfo />
      </Box>
  )
 
}

export default Home