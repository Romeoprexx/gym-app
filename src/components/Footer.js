import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
      <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '15px' } }}>115 Wharf Road, NSW, Australia.</Typography>
      <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '15px' } }}>Connect With Us.</Typography>
      <Stack direction="row" gap="40px" style={{cursor: 'pointer', color: '#3a1212'}} >
        <FacebookIcon />
        <EmailIcon />
        <PhoneIcon />
        <TwitterIcon />
        <InstagramIcon />
      </Stack>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '13px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Deno's Acuity</Typography>
  </Box>
);

export default Footer;