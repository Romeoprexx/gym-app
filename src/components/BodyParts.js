import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyParts = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      type="button"
      className="bodyPart-card"
      sx={{
         borderTop:  bodyPart === item ? '4px solid #ff2625' : '',
         backgroundColor: '#fff',
         width: '270px',
         borderBottomLeftRadius: '20px',
         height: '280px',
         cursor: 'pointer',
         gap: '47px',
      }}
       onClick={() => {
         setBodyPart(item);
         window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
       }}
    >
        <img src={Icon} alt='dumbell' style={{width: '40px', height: '40px'}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyParts