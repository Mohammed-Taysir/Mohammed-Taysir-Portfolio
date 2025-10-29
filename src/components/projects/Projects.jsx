import { Box} from '@mui/material'
import React from 'react'
import SectionTitle from '../section-title/SectionTitle'
import OneWordTitle from '../section-title/OneWordTitle'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ProjectsTabs from './ProjectsTabs';

function Projects() {
  return (
    <Box py = {5} display={'flex'} flexDirection={'column'} gap = {10}>
      <SectionTitle >
        <OneWordTitle title = {'Projects'} icon = {FolderOpenOutlinedIcon} />

      </SectionTitle>

      <ProjectsTabs />

    </Box>
  )
}

export default Projects