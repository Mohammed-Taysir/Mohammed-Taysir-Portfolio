import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

function Stat({ num, title }) {
    const theme = useTheme();
     
    const midScreen = useMediaQuery('(max-width: 992px)');
    const smallScreen = useMediaQuery('(max-width: 620px)');
    const gap = theme.spacing(1);
    const ref = useRef();

    const isInView = useInView(ref, {once: false});
   
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(isInView)
        {
            

            const interval = setInterval(() => {
            
                setCount(prev => {
                    if(prev < num)
                        prev += 1;
                    else 
                        clearInterval(interval);

                    return prev;
                })
                
            }, 120);

            
        }else {
            setCount(0);
        }
    }, [isInView])
    

    


    return (
        <Box 
        ref = {ref}
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
            }} >{count}+</Box>
            <Typography className = "title" fontSize='15px' color={theme.palette.text.secondary} sx = {{
                transition: '0.3s'
            }}>{title}</Typography>

        </Box>
    )
}

export default Stat