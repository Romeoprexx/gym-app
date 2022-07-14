import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin} from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack width="100%" justifyContent="center" alignItems="center" direction="row">
       <InfinitySpin color='grey'/>
    </Stack>
  )
}

export default Loader