import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction={'row'} justifyContent='space-around' sx={{gap: {sm:'122px', xs:'40px'}, mt:{sm: '32px', xs:'20px', justifyContent:'none'}}} px='20px'>
        <Link to={'/'}>
         <img src={Logo} alt='Logo' style={{width:'50px', height:'50px', margin:'0 20px'}}/>
        </Link>
        <Stack direction={'row'} gap='40px' alignItems={'flex-end'} fontSize='24px'>
            <Link to={'/'} style={{borderBottom:'3px solid #ff2625', color:'#3a1212', textDecoration:'none'}}>Home</Link>
            <a href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar