import React from 'react';
import {
  Box,
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import {
  InsightsOutlined,
  SentimentSatisfiedAltOutlined,
  AccessTimeOutlined,
  SavingsOutlined,
  BarChartOutlined,
  RocketLaunchOutlined,
} from '@mui/icons-material';

import { motion } from 'framer-motion';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#bb86fc' },
    secondary: { main: '#03dac6' },
    background: {
      default: '#000000',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    body1: { fontSize: '0.95rem' },
    body2: { fontSize: '0.85rem', color: '#b3b3b3' },
  },
});

const BenefitCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 4,
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(187, 134, 252, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 6px 18px rgba(187, 134, 252, 0.3)',
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '6px',
          background: 'linear-gradient(to right, #bb86fc, #a050ff)',
          opacity: 0.7,
        },
      }}
    >
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Icon sx={{ fontSize: 40, color: 'primary.main' }} />
      </Box>
      <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>
  </motion.div>
);

const About = () => {
  const benefits = [
    {
      icon: InsightsOutlined,
      title: 'Increased Productivity',
      description: 'Designed to boost efficiency and maximize productivity across your workflow',
    },
    {
      icon: SentimentSatisfiedAltOutlined,
      title: 'Better Customer Experience',
      description: 'Delivering seamless, user-focused solutions that enhance every step of the customer journey',
    },
    {
      icon: RocketLaunchOutlined,
      title: 'Scalability & Growth',
      description: 'Designed to scale with your business, ensuring consistent performance and seamless growth at every stage',
    },
    {
      icon: AccessTimeOutlined,
      title: '24/7 Availability',
      description: "We’re available 24/7 to support your needs, ensuring timely communication and continuous project progress.seamless support and collaboration",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id='about'>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '800px' }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3rem' },
              lineHeight: 1.2,
            }}
          >
          We elevate your digital presence
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.6,
            }}
          >
            We deliver modern, responsive, and strategically designed websites that enhance brand presence and drive business growth
          </Typography>
        </motion.div>

        {/* Benefits Grid – Only show first 4 */}
        <Grid container spacing={4} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BenefitCard {...benefit} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
    </section>
  );
};

export default About;
