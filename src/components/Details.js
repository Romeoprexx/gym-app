import React from 'react'
import { Typography, Button, Stack } from '@mui/material';
import BodyImages from '../assets/icons/body-part.png';
import TargetImages from '../assets/icons/target.png'
import EquipmentImages from '../assets/icons/equipment.png'

const Details = ({ exerciseDetail }) => {

    const { gifUrl, target, name, bodyPart, equipment } = exerciseDetail;

    const extraDetails = [
        {
            icon: BodyImages,
            name: bodyPart,
        },
        {
            icon: TargetImages,
            name: target,
        },
        {
            icon: EquipmentImages,
            name: equipment,
        },
    ]
  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
      <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
        <Typography variant="h4">
            {name}
        </Typography>
        <Typography variant="h5" >
          Exercises keeps you fit. {name} {``} is one of the best exercises to target your {target}. It will help you improve your fitness and gain energy.
        </Typography>
        {extraDetails.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{background: '#fff2bd', width: '100px', borderRadius: '50%', height: '100px'}}>
                <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}}/>
            </Button>
            <Typography variant="h5" textTransform="capitalize">
               {item.name}
           </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Details