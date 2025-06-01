import React from 'react';
import {
  Box,
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  ArrowForward,
  Code,
  Web,
  Engineering,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Dark theme setup
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#bb86fc' },
    secondary: { main: '#03dac6' },
    background: { default: '#000000', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#b3b3b3' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500, fontSize: '1.5rem' },
    body1: { fontSize: '0.95rem', lineHeight: 1.6 },
    body2: { fontSize: '0.85rem', color: '#b3b3b3' },
  },
});

const ServiceCard = ({ Icon, title, price, points }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 4,
        borderRadius: '12px',
        boxShadow: '0px 0px 10px rgba(187, 134, 252, 0.25)',
        textAlign: 'left',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          background: 'radial-gradient(circle, rgba(187,134,252,0.15) 0%, transparent 70%)',
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Icon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
        <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.primary', mb: 1 }}>
          {title}
        </Typography>

        <List dense>
          {points.map((point, i) => (
            <ListItem key={i} disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckCircle sx={{ color: 'primary.main', fontSize: 18 }} />
              </ListItemIcon>
              <ListItemText primary={point} primaryTypographyProps={{ variant: 'body2' }} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 3, position: 'relative', zIndex: 1 }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
          {price}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', cursor: 'pointer', mt: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 500, mr: 1 }}>
            Learn More
          </Typography>
          <ArrowForward sx={{ fontSize: 20 }} />
        </Box>
      </Box>
    </Box>
  </motion.div>
);

const HowWeDeliverSection = () => {
  const services = [
  {
    Icon: Code,
    title: 'Starter Website',
    price: '₹7,000',
    points: [
      'Single Page Design',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Free SSL (HTTPS)',
      'Contact Form',
      
      'Fast Hosting Setup',
      '1 Round Revision',
      'Delivery in 5 Days',
    ],
  },
  {
    Icon: Web,
    title: 'Professional Website',
    price: '₹12,000',
    points: [
      'Up to 4 Pages',
      'Admin Dashboard',
      'API Integration',
      'Service/Blog Pages',
      'WhatsApp Chat Link',
      'Google Map Embed',
      'Free Hosting + Domain',
      '2 Rounds Revision',
      'Delivery in 10–14 Days',
    ],
  },
  {
    Icon: Engineering,
    title: 'Enterprise Web Solution',
    price: '₹20,000',
    points: [
      'Full MERN Stack App',
      'User Login System',
      'Admin CMS Panel',
      'Payment Integration',
      'Email via SMTP',
      'Google Map Embed',
      'Google Analytics Setup',
      'Database (MongoDB)',
      '3 Rounds Revision',
      'Delivery in 3–4 Weeks',
    ],
  },
];


  return (
    <section id='price'>
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
          position: 'relative',
          zIndex: 0,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '60%',
            height: '60%',
            top: '20%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(187,134,252,0.1) 0%, transparent 80%)',
            zIndex: -1,
            filter: 'blur(80px)',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 6, maxWidth: '800px', px: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3rem' },
              lineHeight: 1.2,
            }}
          >
            Packages & Pricing
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.6 }}
          >
            Choose from our scalable solutions to launch or grow your digital presence.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" maxWidth="lg">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
    </section>
  );
};

export default HowWeDeliverSection;
