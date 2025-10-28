import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

function Stat({ num, delay, title }) {
    const theme = useTheme();
     
    const midScreen = useMediaQuery('(max-width: 992px)');
    const smallScreen = useMediaQuery('(max-width: 620px)');
    const gap = theme.spacing(1);
    const ref = useRef();

 
   
  
    const BoxMotion = motion(Box);

   
    

    


    return (
        <BoxMotion 
        initial = {{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition= {{
            delay: delay,
            transition: 0.5
        }}

        display={'flex'} flexGrow={1}   flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgcolor={theme.palette.background.paper} borderRadius={14} sx={{
            py: 4,
            width:smallScreen? '100%': midScreen?  `calc(50% - 32px)` : `calc(25% - 48px)`,
            ":hover": {
                bgcolor: theme.palette.primary.main
            },
            ":hover .num": {
                color: "#fff"
            },
            ":hover .title": {
                color: "#000"
            },
            transition: '0.3s'
        }} >

            <Box   className='num' fontSize="30px" fontWeight={'bold'} color={theme.palette.primary.main} sx = {{
                transition: '0.3s'
            }} >{num}+</Box>
            <Typography className = "title" fontSize='15px' color={theme.palette.text.secondary} sx = {{
                transition: '0.3s'
            }}>{title}</Typography>

        </BoxMotion>
    )
}

export default Stat