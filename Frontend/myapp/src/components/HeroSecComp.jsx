import { Box, Button, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import bgImg from '../assets/Img.jpg'


function HeroSecComp() {
  return (
   <Stack
      maxWidth="90%"
      margin="auto"
      borderRadius="24px"
      border="2px solid blue"
      sx={{
        height: { xs: "auto", md: 560 },
        p: { xs: 3, md: 6 },
        background :'blue'       
      }}
      className='shadow-2xl'
    >
      
    </Stack>

  )
}

export default HeroSecComp
