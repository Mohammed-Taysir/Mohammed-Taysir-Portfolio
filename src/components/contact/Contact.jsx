import { Box, Button, Stack, TextField, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef } from 'react'

import SectionTitle from "../section-title/SectionTitle";
import OneWordTitle from "../section-title/OneWordTitle";

import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

import { yupResolver } from "@hookform/resolvers/yup";
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import schema from '../../validation/ContactSchema';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { toast, Zoom } from 'react-toastify';
function Contact() {
  const theme = useTheme();
  const isMid = useMediaQuery('(max-width: 900px)');
  const isSmall = useMediaQuery('(max-width: 768px)');
  const MotionBox = motion(Box);
  const form = useRef();
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const sendEmail = (data) => {


    emailjs
      .sendForm('service_05h0s4o', 'template_71fxbri', form.current, {
        publicKey: 'FgyDEjzcTp45u3pPY',
      })
      .then(
        () => {
          toast.success('Your message has been sent. We will contact you soon.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
          reset();
        },
        (error) => {
          toast.error('Oops! Something went wrong while sending your message."', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        },
      );



  }
  return (
    <Box id="contact" py={5} display={'flex'} flexDirection={'column'} gap={isSmall ? 8 : 10}>
      <SectionTitle>
        <OneWordTitle title={"Contact"} icon={CallOutlinedIcon} />
      </SectionTitle>

      <MotionBox
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1
        }}
        viewport={{ once: true }} >
        <Box
          component={'form'}
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: isMid ? '90%' : '70%',
            margin: 'auto',
            alignItems: 'center'
          }}>
          <Stack direction={isSmall ? 'column' : 'row'} alignItems={'center'} spacing={2} justifyContent={'center'} width={'100%'}>

            <TextField {...register('user_name')} label="Name" variant='outlined' fullWidth sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: theme.palette.background.paper,
                "& fieldset": {
                  borderColor: theme.palette.borderColor.main
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: '15px'
              }
            }}
              error={errors.user_name}
              helperText={errors.user_name?.message}
            />
            <TextField {...register('user_email')} label="Email" variant='outlined' fullWidth sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: theme.palette.background.paper,
                "& fieldset": {
                  borderColor: theme.palette.borderColor.main
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main
                },

              },
              "& .MuiInputLabel-root": {
                fontSize: '15px'
              }
            }}
              error={errors.user_email}
              helperText={errors.user_email?.message}
            />
            {/* <TextField {...register('user_phone')} label="Phone" variant='outlined' fullWidth sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: theme.palette.background.paper,
                "& fieldset": {
                  borderColor: theme.palette.borderColor.main
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main
                },

              },
              "& .MuiInputLabel-root": {
                fontSize: '15px'
              }
            }}
              error={errors.user_phone}
              helperText={errors.user_phone?.message}
            /> */}

            <Box className="phone-input" sx={{
              width: "100%",
              borderRadius: 2,
              ":hover": {
                border: `1px solid ${theme.palette.primary.main}`,

              },
              ":focus-within": {
                border: `2px solid ${theme.palette.primary.main}`
              }
            }}>
              <Controller
                name="user_phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="PS" // الدولة الافتراضية
                    international
                    countryCallingCodeEditable={false}
                    placeholder="Phone"
                    className="custom-phone-input"
                    style={{
                      width: '100%',
                      padding: '16.5px 14px', // نفس padding حقل MUI
                      fontSize: '16px',
                      borderRadius: 8,
                      border: errors.user_phone ? '1px solid red' : `1px solid ${theme.palette.borderColor.main}`,
                      backgroundColor: theme.palette.background.paper,
                      outline: 'none'

                    }}
                  />
                )}
              />
              {errors.user_phone && (
                <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                  {errors.user_phone.message}
                </p>
              )}
            </Box>

          </Stack>
          <TextField {...register('message')} label="Message" variant='outlined' fullWidth sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: theme.palette.background.paper,
              borderRadius: 2,
              "& fieldset": {
                borderColor: theme.palette.borderColor.main
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main
              },
              height: '150px',
            },
            "& .MuiInputLabel-root": {
              fontSize: '15px'
            }
          }}
            error={errors.message}
            helperText={errors.message?.message}
          />

          <Button type='submit' variant='contained' size='large' sx={{
            fontWeight: 'normal',
            textTransform: 'capitalize',
            fontSize: '14px'
          }} endIcon={<SendIcon />}>Send Message </Button>
        </Box>
      </MotionBox>

    </Box>
  )
}

export default Contact