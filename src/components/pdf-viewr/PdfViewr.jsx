import { Box } from '@mui/material'
import React from 'react'

function PdfViewr() {
  return (
    <Box>
        <iframe style={{width: '100%', minHeight: "100vh"}} src = {'/Mohammed_Taysir_Alkhatib_new_cv.pdf'}></iframe>
    </Box>
  )
}

export default PdfViewr