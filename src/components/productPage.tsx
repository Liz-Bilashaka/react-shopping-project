import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import ImageCarousel from '../components/imageCarousel'



export default function ProductPage() {
  return (
    <Box sx={{ height:{xs:'60rem', sm:'30rem'}, flexGrow: 1,minWidth: "321px"  }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 4, lg:8}}>
        <Grid xs={12} sm={12} md={6}  sx={{display: {sm:'flex', md:'block'}, justifyContent:'center'}}>
          <ImageCarousel/>
        </Grid>
        <Grid xs={12} sm={12} md={6} sx={{display:'flex', alignItems:'center',padding:{xs: '2rem 2rem 0', sm: '0 2rem'},}}>
        <Typography> Product Detail</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}