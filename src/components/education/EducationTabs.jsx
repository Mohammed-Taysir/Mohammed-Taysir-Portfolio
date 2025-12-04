import * as React from 'react';


import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { Button, Stack, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Step from './Step';
import { motion } from 'framer-motion';
import CustomSwiper from '../swiper/CustomSwiper';

import frontcer from '../../assets/frontcer.png'
import { SwiperSlide } from 'swiper/react';
import Cer from './Cer';



const steps = [
    {
        id: 1,
        title: 'Bachelor of Computer Systems Engineering',
        date: '📆 From 2023 to 2027', 
        description: 'Studying Computer Systems Engineering with a focus on Software Engineering, gaining solid knowledge in software development, system architecture, databases, and networking. Experienced in working on practical projects and applying problem-solving and analytical skills to build efficient technical solutions.'
    },
    {
        id: 2,
        date: '📆 from 2019 to 2020',
        title: 'English Access Scholarship',
        description: `Scholarship: Awarded the ACCESS Program scholarship by the U.S. Consulate in Jerusalem
for two years to enhance English language skills.`
    },
    {
        id: 3,
        title: 'Frontend Develpment Course',
        date: '📆 2025',
        description: `Completed an intensive 8-month Front-End Development program at Knowledge Academy, covering HTML, CSS, JavaScript, Bootstrap, React, MUI, TypeScript, and Next.js. Developed multiple high-quality projects that enhanced my practical skills in creating responsive, scalable, and user-friendly web interfaces.`
    },
    {
        id: 4,
        title: 'Back-End Development Course – ASP.NET Core | Knowledge Academy',
        date: '📆 2025',
        description: `Currently enrolled in a Back-End ASP.NET Core course at Knowledge Academy, focusing on server-side development, API building, authentication, and database integration. This program strengthens my understanding of modern back-end architectures and enhances my full-stack development skills.`
    },


]


const certifications = [
    {
        id: 1,
        image: frontcer
    }
]

function EducationTabs() {

    const theme = useTheme();
    const [value, setValue] = useState(0)
    const MotionBox = motion(Box);
    const small = useMediaQuery('(max-width: 435px)');
    return (
        <Box
        >
            <Stack direction={'row'} sx={{
                p: '5px',
                bgcolor: theme.palette.background.paper,
                borderRadius: 2,
                width: small ? '200px' : '400px',
                m: 'auto'
            }}>

                <Box flexGrow={1} >
                    <Button onClick={() => { setValue(0) }} fullWidth variant='contained' sx={{
                        textTransform: 'capitalize',
                        bgcolor: value == 0 ? theme.palette.background.default : 'transparent',
                        boxShadow: 0,

                        color: theme.palette.text.primary,
                        fontWeight: 'normal',
                        ":hover": {
                            boxShadow: 0
                        }
                    }} size='small' >Education</Button>
                </Box>

                <Box flexGrow={1}>
                    <Button onClick={() => { setValue(1) }} fullWidth variant='contained' sx={{
                        textTransform: 'capitalize',
                        bgcolor: value == 1 ? theme.palette.background.default : 'transparent',
                        boxShadow: 0,
                        color: theme.palette.text.primary,
                        fontWeight: 'normal',
                        ":hover": {
                            boxShadow: 0
                        }
                    }} size='small' >Certificates</Button>
                </Box>

            </Stack>

            {value == 0 ? (
                <MotionBox
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5
                    }}>
                    <Box sx={{
                        display: 'grid',
                        gap: '20px',
                        mt: 5,
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                    }}>

                        {
                            steps.map(step => (<Step key={step.id} step={step} />))
                        }

                    </Box>
                </MotionBox>
            ) : (<MotionBox
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5
                }}
            >

                <Box sx={{

                    mt: 5
                }}>

                    <CustomSwiper>

                        {
                            certifications.map(cer => (<SwiperSlide key={cer.id}>
                                <Cer cer={cer} />
                            </SwiperSlide>))
                        }

                    </CustomSwiper>
                </Box>
            </MotionBox>)}

        </Box>

    );
}

export default EducationTabs