import React from 'react';
import Footer from './components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPage from '../src/Pages/LandingPage';
import Navbar from '../src/components/navbar/Navbar';

const font =  "'Quicksand'";
const theme = createTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#6effff',
      main: '#00e5ff',
      dark: '#00b2cc',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: font,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
      <LandingPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
