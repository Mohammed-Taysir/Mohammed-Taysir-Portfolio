import * as React from 'react';


import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import Step from './Step';
import { motion } from 'framer-motion';



const steps = [
    {
        id: 1,
        title: 'Bachelor of Computer Systems Engineering',
        date: '📆 From 2022 to 2027', 
        description: 'Iam A Third Level Student In Alazhar University Gaza'
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
        description: `Completed a six-month intensive course covering HTML, CSS, JavaScript, Bootstrap, React, and MUI. Gained hands-on experience in building responsive, interactive, and user-friendly web interfaces.`
    },
    

]

function EducationTabs() {
  
    const theme = useTheme();
    const [value, setValue] = useState(0)
    const MotionBox = motion(Box);
    return (
        <Box
        >
            <Stack direction={'row'}  sx = {{
                p: '5px',
                bgcolor: theme.palette.background.paper,
                borderRadius: 2,
                width: '400px',
                m: 'auto'
            }}>

                <Box flexGrow = {1} >
                    <Button onClick={() => {setValue(0)}} fullWidth  variant = 'contained' sx = {{
                        textTransform: 'capitalize',
                        bgcolor: value == 0? theme.palette.background.default : 'transparent',
                        boxShadow: 0,
                        
                        color: theme.palette.text.primary,
                        fontWeight: 'normal',
                        ":hover": {
                            boxShadow: 0
                        }
                    }} size = 'small' >Education</Button>
                </Box>
                
                <Box flexGrow = {1}>
                    <Button onClick={() => {setValue(1)}} fullWidth variant = 'contained' sx = {{
                        textTransform: 'capitalize',
                        bgcolor: value == 1? theme.palette.background.default : 'transparent',
                        boxShadow: 0,
                        color: theme.palette.text.primary,
                        fontWeight: 'normal',
                        ":hover": {
                            boxShadow: 0
                        }
                    }} size = 'small' >Certificates</Button>
                </Box>
                
            </Stack>

            {value == 0?(
            <MotionBox
            initial = {{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{
                duration: 0.5
            }}>
                <Box sx = {{
                    display: 'grid',
                    gap: '20px',
                    mt: 5,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
                }}>

                    {
                        steps.map(step => (<Step key = {step.id} step = {step} />))
                    }

                </Box>
            </MotionBox>
        ): (<Box>

            <Box sx = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 5
            }}>

                Soon
            </Box>
        </Box>)}

        </Box>
        
    );
}

export default EducationTabs