import { Box } from '@mui/material'
import React from 'react'

function Cer({cer}) {
  return (
    <Box >
        <Box  component={'img'} src = {cer.image} sx = {{objectFit: 'contain', width: '100%', height: '100%'}} />
    </Box>
  )
}

export default Cer