import { Avatar, Card, CardContent, Rating, Stack, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion';
import React from 'react'

function Review({ name, role, image, rating, message }) {
    const theme = useTheme();

    const MotionCard = motion(Card);

    return (
        <MotionCard
        initial = {{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
            delay: 0.5,
            duration: 0.5
        }}
        sx = {{
            maxHeight: 210,
        }}>
            <CardContent sx = {{
                p: 4,
                height: 210,
                
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Avatar src={image} />
                    <Stack>
                        <Typography fontSize = '18px'>{name}</Typography>
                        <Typography fontSize = '13px' color = {theme.palette.text.secondary}>{role}</Typography>
                        <Rating value={rating}  readOnly />
                    </Stack>
                </Stack>

                <Typography fontSize = '15px' color = {theme.palette.text.secondary}>{message}</Typography>

            </CardContent>

        </MotionCard>
    )
}

export default Review