import React, { useContext, useState } from 'react';
import logo from './logo.png';
import './App.css';

import AppBar from './components/navBar'
import ProductPage from './components/productPage'

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import shadows, { Shadows } from '@mui/material/styles/shadows';

import {ProductContext } from './context/productContext'
import { Typography } from '@mui/material';




let theme = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  typography:{
    fontFamily: 'Kumbh+Sans',
    h3: {
      color: 'hsl(220, 13%, 13%)',
      fontWeight:700
    },
    body1:{
      fontWeight: 700,
      
    },
    body2:{
      fontWeight: 700
    },
    h4: {
      color: 'hsl(220, 13%, 13%)',
      fontWeight: 700
    },
    h6:{
      color:'hsl(219, 9%, 45%)',
      fontWeight: 700,
    }, 
    subtitle2: {
      color: "hsl(26, 100%, 55%)",
      fontWeight: 700
    }
  },
  palette: {
    
    primary: {
      main: "hsl(26, 100%, 55%)",
    },
    secondary: {
      main: '#edf2ff',
    }
    
  },
});

theme = responsiveFontSizes(theme)

theme.typography.h3 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)':{
    fontSize: '2.0rem',
    fontWeight:700
  },
  [theme.breakpoints.up('md')]:{
    fontSize: '1.4rem',
    fontWeight:700
  },
  [theme.breakpoints.up('lg')]:{
    fontSize: '2.4rem',
    fontWeight:700
  }
}
theme.typography.subtitle1 = {
  fontSize: '0.8rem',
  color:'hsl(219, 9%, 45%)'
 
}
theme.typography.h4 = {
  fontSize: '1.8rem',
  fontWeight:700,

  '@media (min-width:600px)':{
    fontSize: '1.8rem',
    
  },
  [theme.breakpoints.up('md')]:{
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]:{
    fontSize: '2.0rem',

  }
}

function App() {
  const [cartQuantity, setCartQuantity] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <ProductContext.Provider value={{cartQuantity,setCartQuantity}}>
        <div className="App">
        <AppBar quantity={cartQuantity}/>
        <ProductPage />
        </div>
    </ProductContext.Provider>
    </ThemeProvider>
  );
}



export default App;
