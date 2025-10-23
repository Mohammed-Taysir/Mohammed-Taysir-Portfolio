import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';


import { useTheme } from '@emotion/react';
import { Link, useMediaQuery } from '@mui/material';


function CustomList({center = true,children}) {
    const mediaLarge = useMediaQuery('(max-width: 1115px)');


    const theme = useTheme();
  return (
   <Box className = "list" display={'none'} zIndex={999999} position = 'absolute' sx = {{
    top: '100%',
    right: !center && '100%',
    left: center && '50%',
    transform: center && 'translateX(-50%)',
    pt: 3,
    transition: '0.7s'
   }} >
     <Box  sx={{ bgcolor: theme.palette.background.default, border: `1px solid ${theme.palette.borderColor.main}`  , borderRadius: 2,px: 2, overflow: 'auto'}}>
      <nav aria-label="main mailbox folders">
        <List>
          
          {children}
          
        </List>
      </nav>
     
      
    </Box>
   </Box>
  );
}

export default CustomList