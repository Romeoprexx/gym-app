import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, Stack, Button } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, setBodyPart, bodyPart }) => {

  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts (['all', ...bodyPartsData])
    }

    fetchExercisesData();

  }, [])
  
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const serachedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(serachedExercises);

    }
  }
  return (
    <Stack justifyContent="center" p='20px' alignItems="center" mt='37px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign="center">
        Amazing Exercises To <br /> Keep You Fit
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '600', border: 'none', borderRaduis: '5px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          value={search}
          height="76px"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
          placeholder='Search Exercises...'
        />
        <Button className="search-btn" sx={{ bgcolor: '#ff2625', textTransform: 'none', color: '#fff', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute', right: '0' }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{
        width: '100%',
        p: '20px',
        position: 'relative'
      }}>
         <HorizontalScrollbar data={bodyParts} isBodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises