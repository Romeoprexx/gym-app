import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
      <Stack direction="row">
        <Button sx={{color: '#fff', ml: '21px', background: '#ffa9a8', fontSize: '14px', textTransform: 'capitalize', borderRadius: '20px'}} className="button"> 
          {exercise.bodyPart}
        </Button>
        <Button sx={{color: '#fff', ml: '21px', background: '#fcc755', fontSize: '14px', textTransform: 'capitalize', borderRadius: '20px'}} className="button"> 
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" fontWeight="bold" color="#000" textTransform="capitalize" mt="11px" pb="10px" fontSize="20px">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard