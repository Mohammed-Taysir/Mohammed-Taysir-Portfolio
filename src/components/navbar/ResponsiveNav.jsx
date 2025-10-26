import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Link, Stack, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
import CustomList from '../list/CustomList';
import MemoryIcon from '@mui/icons-material/Memory';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from 'react';
import ModeSwitch from '../mode-switch/ModeSwitch';


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

const aboutList = [
  {
    name: 'Technical Skills',
    path: '#technical',
    icon: MemoryIcon
  },
  {
    name: 'Soft Skills',
    path: '#soft',
    icon: ImportContactsTwoToneIcon
  },
  {
    name: 'Projects',
    path: '#projects',
    icon: FolderOpenOutlinedIcon
  },
  {
    name: 'Education',
    path: '#education',
    icon: SchoolOutlinedIcon
  },
  {
    name: 'Experience',
    path: '#experience',
    icon: ScienceOutlinedIcon
  },
  {
    name: 'Reviews',
    path: '#reviews',
    icon: StarBorderOutlinedIcon
  }
]

function ResponsiveNav() {
  const [open, setOpen] = React.useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const theme = useTheme();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{
      width: 320,
      pt: 5
    }} role="presentation" position='relative' >

      <List >
        <Stack spacing={5} px={2}>
          <Link href='#home' sx={{
            textDecoration: 'none',
            color: theme.palette.text.secondary,
            fontSize: '16px',
            transition: '0.3s',
            ":hover": {
              color: theme.palette.primary.main
            }
          }} variant='body1'>Home</Link>
          <Link href='#contact' sx={{
            textDecoration: 'none',
            color: theme.palette.text.secondary,
            fontSize: '16px',
            transition: '0.3s',
            ":hover": {
              color: theme.palette.primary.main
            }
          }} variant='body1'>Contact Me</Link>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            ":hover .list": {
              display: 'block'
            },

          }}>
            <Link onClick={() => {
              setOpenAbout(prev => !prev)
            }} sx={{
              textDecoration: 'none',
              color: theme.palette.text.secondary,
              fontSize: '16px',
              transition: '0.3s',
              cursor: 'pointer',
              ":hover": {
                color: theme.palette.primary.main
              }

            }} variant='body1' >About

            </Link>

            <KeyboardArrowDownOutlinedIcon fontSize='small' sx={{
              transition: '0.7s',
              color: theme.palette.text.secondary,
              rotate: openAbout && "180deg"
            }} />
            {
              openAbout && <List sx={{
                position: 'absolute',
                top: "100%",
                bgcolor: theme.palette.background.paper,
                width: 'calc(100% - 20px)',
                m: 1,
                borderRadius: 2,
                transition: '0.7s'
              }} >
                {aboutList.map(item => {
                  const ListIcon = item.icon;

                  return <ListItem key={item.name} disablePadding sx={{

                  }}>
                    <ListItemButton component={Link} href={item.path} sx={{
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
                })}
              </List>
            }
          </Box>



        </Stack>


      </List>

    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon fontSize='small' sx={{
          color: theme.palette.primary.main
        }} />
      </IconButton>

      <Drawer sx={{
        position: 'relative',
        ".MuiPaper-root": {
          backgroundColor: theme.palette.background.default
        }
      }} anchor='right' open={open} onClose={toggleDrawer(false)} >
        <IconButton sx={{
          position: 'absolute',
          zIndex: 999,
          right: 5,
          top: 5
        }} onClick={toggleDrawer(false)}>
          <CloseIcon sx={{
            fontSize: '17px',
            color: theme.palette.text.secondary
          }} />
        </IconButton>
        {DrawerList}
        <Box sx={{
        position: 'absolute',
        bottom: 5,
        zIndex: 999,
        right: 50
      }}>
        <ModeSwitch mobile={true} />
      </Box>
      </Drawer>
      
    </div>
  )
}

export default ResponsiveNav