import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Services';
import About from './components/About';
import Review from "./components/Review";
import Trusted from "./components/trusted";
import Price from "./components/Price";
import Project from "./components/Projects";
import Footer from './components/Footer';
import animationData from './animations/Animation - 1748714533033 (2).json';
import Lottie from "lottie-react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Box
          sx={{
            bgcolor: '#000',
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Lottie
            animationData={animationData}
            loop={false}
            onComplete={() => setShowSplash(false)}
            style={{ height: "100vh", width: "100%" , objectFit:"cover"}}
          />
        </Box>
      ) : (
        <Box
          sx={{
            bgcolor: '#000',
            color: '#fff',
            minHeight: '100vh',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Navbar />
          <Hero />
          <Service />
          <About />
          <Trusted />
          <Project />
          <Review />
          <Price />
          <Footer />
        </Box>
      )}
    </>
  );
}

export default App;
