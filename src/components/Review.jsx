import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from '@mui/material';
import { Star } from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#fff',
      secondary: '#b3b3b3',
    },
    primary: { main: '#bb86fc' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const TestimonialCard = ({ stars, quote, avatarSrc, name, title }) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 4,
      borderRadius: 3,
      border: '1px solid #2a2a2a',
      boxShadow: '0 4px 12px rgba(187, 134, 252, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 6px 18px rgba(187, 134, 252, 0.3)',
      },
      flex: '1 1 100%', // Default full width
      maxWidth: { xs: '100%', md: '45%' }, // Two per row on md+
      m: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Box sx={{ mb: 2 }}>
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} sx={{ color: 'primary.main', fontSize: 24, mr: 0.5 }} />
      ))}
    </Box>
    <Typography
      variant="body1"
      sx={{
        fontStyle: 'italic',
        color: 'text.primary',
        mb: 3,
        lineHeight: 1.6,
      }}
    >
      "{quote}"
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
      <Avatar src={avatarSrc} sx={{ width: 48, height: 48, mr: 2 }} />
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Box>
    </Box>
  </Box>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      stars: 5,
      quote:
        "Exceptional service! The website design exceeded our expectations—clean, responsive, and delivered right on time. Highly recommended!",
      avatarSrc: 'https://via.placeholder.com/150/bb86fc/FFFFFF?text=JC',
      name: 'Neha Gupta',
      title: 'Startup Founder',
    },
    {
      stars: 4.5,
      quote:
        'Professional, creative, and detail-oriented. They truly understood our brand and translated it into a beautiful digital experience.',
      avatarSrc: 'https://via.placeholder.com/150/03dac6/FFFFFF?text=SM',
      name: 'Sneha Joshi',
      title: 'E-commerce Owner',
    },
    {
      stars: 5,
      quote:
        'From concept to launch, the entire process was smooth and efficient. They went above and beyond to bring our vision to life',
      avatarSrc: 'https://via.placeholder.com/150/bb86fc/FFFFFF?text=DR',
      name: 'Ravi Kumar ',
      title: 'Agency Owner',
    },
    {
      stars: 4,
      quote:
        'Very impressed with the communication and 24/7 support throughout the project. Our website is now faster, more user-friendly, and visually stunning.',
      avatarSrc: 'https://via.placeholder.com/150/03dac6/FFFFFF?text=EM',
      name: 'Karthik Patel',
      title: 'Startup Founder',
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 6, maxWidth: 800 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}
          >
            Hear From Our Happy Clients
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Real businesses, real results with !WebWave.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: 1200,
            width: '100%',
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TestimonialsSection;
