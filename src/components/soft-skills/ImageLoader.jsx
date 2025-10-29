import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import image from '../../assets/soft-photo.jpg'
import { Oval } from "react-loader-spinner";

function ImageLoader() {
    const theme = useTheme();
    const smallScreen = useMediaQuery('(max-width: 400px)');
    return (
        <Box width={smallScreen? 250 :300} height={smallScreen? 250 :300} borderRadius={'50%'}  position={'relative'}>

            <Oval
                visible={true}
                height= {smallScreen? '250' :'300'}
                width={smallScreen? '250' :'300'}
                color= {theme.palette.primary.main}
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

            <Box position = {'absolute'} component={'img'} src={image} width={'calc(100% - 20px)'} height={'calc(100% - 20px)'} borderRadius={'50%'} sx={{
                objectFit: 'cover',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }} />

        </Box>
    )
}

export default ImageLoader