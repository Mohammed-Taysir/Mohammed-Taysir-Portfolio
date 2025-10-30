import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
import Icon from "./Icon";
import PestControlIcon from '@mui/icons-material/PestControl';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { Apps } from "@mui/icons-material";


function BlobImage() {
    const theme = useTheme();
    const MotionBox = motion(Box);
    const isLargeScreen = useMediaQuery('(max-width: 1000px)');
    const smallScreen = useMediaQuery('(max-width: 599px)');
    return (
        <MotionBox
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5
            }}
            sx={{
                position: "relative",
                width: { xs: 250, sm: 350, md: 450 },
                mx: "auto",
                ...(isLargeScreen ? { order: -1 } : {})
            }}
        >
            <Box sx = {{
                position: 'absolute',
                top:smallScreen?30 : 70,
                left:smallScreen? 30 : 60,
                zIndex: 99999
            }}>
                <Icon>
                    <PestControlIcon sx={{ color: theme.palette.primary.main }} />
                </Icon>
            </Box>
            <Box sx = {{
                position: 'absolute',
                top:smallScreen?40 : 100,
                right:smallScreen? 40 : 60,
                zIndex: 99999
            }}>
                <Icon>
                    <CodeOffIcon sx={{ color: theme.palette.primary.main }} />
                </Icon>
            </Box>
            <Box sx = {{
                position: 'absolute',
                bottom:smallScreen? 20 : 80,
                left: 60,
                zIndex: 99999
            }}>
                <Icon>
                    <Apps sx={{ color: theme.palette.primary.main }} />
                </Icon>
            </Box>
            <svg
                viewBox="0 0 550 591"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: "100%",
                    filter: "drop-shadow(0 0 25px rgba(22,163,74,0.5))", // ظل بنفس درجة اللون
                }}
            >
                <defs>
                    {/* الشكل السداسي */}
                    <mask id="maskBlob" maskType="alpha">
                        <path
                            fill="white"
                            d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 
                 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 
                 36.843 447.468 36.843 438.894V191.606C36.843 183.032 
                 41.4174 175.109 48.843 170.822L263 47.1782Z"
                        />
                    </mask>

                    {/* تحميل الصورة */}
                    <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use
                            href="#imageBlob"
                            transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                        />
                    </pattern>

                    <image
                        id="imageBlob"
                        width="640"
                        height="940"
                        href="/my-photo.png" // ضع صورتك داخل مجلد public
                    />
                </defs>
                <path
                    d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
             170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
             447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 
             270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 
             36.843 447.468 36.843 438.894V191.606C36.843 183.032 
             41.4174 175.109 48.843 170.822L263 47.1782Z"
                    fill={theme.palette.primary.main}
                    opacity="1"
                />

                {/* الصورة داخل الشكل */}
                <g mask="url(#maskBlob)">
                    <rect x="37" width="476" height="630" fill="url(#pattern0)" />
                </g>

                {/* خلفية اللون الأخضر */}

            </svg>
        </MotionBox>
    );

}

export default BlobImage