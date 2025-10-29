
import { Box, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import SectionTitle from '../section-title/SectionTitle'
import TwoWordsTitle from '../section-title/TwoWordsTitle'
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AutorenewIcon from "@mui/icons-material/Autorenew";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Skill from './Skill';
import ImageLoader from './ImageLoader';
const topSkills = [
    { skill: "Effective Communication", icon: HandshakeOutlinedIcon },
    { skill: "Teamwork & Collaboration", icon: GroupOutlinedIcon },
]

const leftSkills = [
    { skill: "Problem Solving", icon: PestControlOutlinedIcon },
    { skill: "Time Management", icon: TimerOutlinedIcon },
]

const rightSkills = [
    { skill: "Continuous Learning", icon: LightbulbOutlinedIcon },
    { skill: "Attention To Detail", icon: LocationSearchingOutlinedIcon },
]
const bottomSkills = [
    { skill: "Resilience & Adaptation", icon: AutorenewIcon },
    { skill: "Creativity and Excellence", icon: EmojiObjectsIcon }
];

function SoftSkills() {
    const isMidScreen = useMediaQuery('(max-width: 820px)');
    return (
        <Box py={5} display={'flex'} flexDirection={'column'} gap = {10}>
            <SectionTitle>
                <TwoWordsTitle first='Soft' last="Skills" icon={ImportContactsTwoToneIcon} />
            </SectionTitle>

            <Box>
                <Stack  direction={isMidScreen? "column":'row'} alignItems={'center'} justifyContent={'center'} spacing = {2} mb = {isMidScreen && 2}>
                    {
                        topSkills.map(skill => (<Skill skill = {skill.skill} icon = {skill.icon} key = {skill.skill} />))
                    }
                </Stack>

                <Stack direction={isMidScreen? 'column' :'row'} justifyContent={'space-between'} alignItems={'center'} >
                    <Stack spacing = {isMidScreen?2 :10}>
                        {
                            leftSkills.map(skill => (<Skill skill = {skill.skill} icon = {skill.icon} key = {skill.skill} />))
                    
                        }
                    </Stack>

                        <Box my = {isMidScreen? 5 :10}>
                            <ImageLoader />
                        </Box>

                    <Stack spacing = {isMidScreen? 2 :10}>
                        {
                            rightSkills.map(skill => (<Skill skill = {skill.skill} icon = {skill.icon} key = {skill.skill} />))
                    
                        }

                    </Stack>

                </Stack>

                <Stack  direction={isMidScreen? 'column' :'row'} alignItems={'center'} justifyContent={'center'} spacing = {2} mt = {isMidScreen && 2}>
                    {
                        bottomSkills.map(skill => (<Skill skill = {skill.skill} icon = {skill.icon} key = {skill.skill} />))
                    }
                </Stack>
            </Box>


        </Box>
    )
}

export default SoftSkills