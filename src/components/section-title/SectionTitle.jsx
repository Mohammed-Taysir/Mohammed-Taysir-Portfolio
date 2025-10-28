import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import theme from '../../theme';
import {motion} from 'framer-motion'

function SectionTitle({ title, icon }) {
  const Icon = icon;
  const theme = useTheme();
  const MotionBox = motion(Box);

  return (
   
    
      <MotionBox

      initial = {{y: -100}}
      whileInView={{y: 0}}
      transition = {{
        duration: 0.5
      }}

        display={'flex'} alignItems={'center'} gap={1} sx={{
          ml: 'auto',
          mr: 'auto',
          px: 6,
          py: 1,
          borderRadius: 14,
          width: 'fit-content',
          boxShadow: `0px 3px 0 ${theme.palette.primary.main}`,
          
        }}>

        <Typography color={theme.palette.text.primary} fontSize="1.5rem">{title}</Typography>
        <Icon sx={{
          color: theme.palette.primary.main
        }} />

      </MotionBox>

  )
}

export default SectionTitle