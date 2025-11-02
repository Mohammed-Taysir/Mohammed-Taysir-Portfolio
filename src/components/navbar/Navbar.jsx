import { Box, Container, IconButton, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import logo from '../../assets/Logo.webp'
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

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ThemeContext } from '../../context/ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveNav from './ResponsiveNav';
import ModeSwitch from '../mode-switch/ModeSwitch';




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
    name: 'Reviews',
    path: '#reviews',
    icon: StarBorderOutlinedIcon
  }
]


function Navbar() {
  const theme = useTheme();
  const { mode, setMode } = useContext(ThemeContext);
  const isLargeSecreen = useMediaQuery('(max-width: 1115px)');
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  console.log(mode)
  return (
    <Box component={'header'} position={'relative'} py={2} sx={{
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: theme.palette.background.default
    }}>

      <Container maxWidth='lg'>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'} gap={2} textDecoration='none' >
            <Link href='#home'><Box component='img' src={logo} /></Link>
            <Link href="#home" sx={{ textDecoration: 'none' }}>
              <Typography sx={{
                fontSize: '18px',
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                textDecoration: 'none'
              }}>Alkhatib</Typography>
            </Link>
          </Box>
          {
            !isSmallScreen ? (<Stack alignItems={'center'} direction='row' spacing={2}>
              <Stack direction='row' alignItems={'center'} spacing={5}>
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
                  ":hover .arrow": {
                    rotate: '180deg'
                  }
                }}>
                  <Link  sx={{
                    textDecoration: 'none',
                    color: theme.palette.text.secondary,
                    fontSize: '16px',
                    transition: '0.3s',
                    ":hover": {
                      color: theme.palette.primary.main
                    }

                  }} variant='body1' >About

                  </Link>

                  <KeyboardArrowDownOutlinedIcon fontSize='small' sx={{
                    transition: '0.7s',
                    color: theme.palette.text.secondary
                  }} className='arrow' />
                  <CustomList positioning={{top: '100%', left: '50%', transform: 'translateX(-50%)', minWidth: 190 }}>
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
                  </CustomList>
                </Box>



              </Stack>
              {/* <Box sx={{
                position: 'relative',
                ':hover .list': {
                  display: 'block',
                }
              }} >
                {
                  mode === "light" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />
                }

                <CustomList positioning={{
                  left: isLargeSecreen ? "-335%" : "50%",
                  transform: !isLargeSecreen && "translateX(-50%)"
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

              </Box> */}
              <ModeSwitch />
            </Stack>) : <ResponsiveNav />
          }
        </Stack>
      </Container>

    </Box>
  )
}

export default Navbar