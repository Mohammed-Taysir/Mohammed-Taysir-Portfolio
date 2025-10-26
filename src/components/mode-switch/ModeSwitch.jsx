import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ThemeContext } from '../../context/ThemeContext';
import CustomList from '../list/CustomList';


const modeList = [
  {
    name: 'dark',
    icon: DarkModeOutlinedIcon,
  },
  {
    name: 'light',
    icon: LightModeOutlinedIcon
  }
]


function ModeSwitch({ mobile = false }) {
    const isLargeSecreen = useMediaQuery('(max-width: 1115px)');
    const {mode, setMode} = useContext(ThemeContext);
    const theme = useTheme();
    return (
        <Box sx={{
            position: 'relative',
            ':hover .list': {
                display: 'block',
            }
        }} >
            {
                mode === "light" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />
            }

            <CustomList positioning={{
                top: mobile? "-420%": "100%",
                left: isLargeSecreen && !mobile ? "-335%" : "50%",
                transform: (!isLargeSecreen || mobile)  && "translateX(-50%)"
            }}>
                {
                    modeList.map(item => {
                        const ListIcon = item.icon;

                        return <ListItem key={item.name} disablePadding sx={{

                        }}>
                            <ListItemButton onClick={() => {
                                setMode(item.name)
                            }} sx={{
                                gap: 1,
                                justifyContent: 'center',
                                borderRadius: 2
                            }} >
                                <ListItemIcon sx={{
                                    minWidth: 0
                                }} >
                                    <ListIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{
                                    ".MuiTypography-root": {
                                        fontSize: '0.8rem',
                                        color: theme.palette.text.secondary
                                    }
                                }} />
                            </ListItemButton>
                        </ListItem>
                    })
                }
            </CustomList>

        </Box>
    )
}

export default ModeSwitch