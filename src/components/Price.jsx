import React, { useState } from 'react';
import Contact from './ContactForm';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { CheckCircle, Code, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#000000', paper: '#1a1a1a' },
    text: { primary: '#ffffff', secondary: '#cccccc' },
    primary: { main: '#bb86fc' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const serviceFeatures = [
  'Custom website design',
  'Mobile-friendly layouts',
  'Fast and responsive pages',
  'Secure backend systems',
  'Online store setup (E-commerce)',
  'SEO setup for Google ranking',
  'Easy-to-use admin panel',
  'Booking or contact forms',
  'Payment gateway integration',
  'Blog or news section setup',
  'Speed and performance optimization',
  'Google Analytics integration',
  'Live chat and chatbot setup',
  'Social media integration',
  'Email marketing setup',
  'Website hosting and domain setup',
  'Ongoing website maintenance',
  'Regular backups and security updates',
  'Landing pages for ads or campaigns',
  'Website redesign and upgrades',
];

const UnifiedServiceCard = () => {
  const [showForm, setShowFrom] = useState(false);

  return (
    <section id="services">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            px: 3,
            py: 10,
            bgcolor: 'background.default',
            textAlign: 'center',
          }}
        >
          {/* Headline outside the card */}
          <Typography variant="h4" fontWeight={600} gutterBottom color="text.primary">
            Comprehensive Web Development Services
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 800, mb: 6 }}
          >
            Delivering complete digital solutions — from concept to deployment — to empower
            businesses with modern, high-performance web applications tailored for growth and
            scalability.
          </Typography>

          {/* Animated Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%', maxWidth: 800 }}
          >
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: 5,
                borderRadius: 4,
                boxShadow: '0 0 20px rgba(187,134,252,0.15)',
              }}
            >
              <Code sx={{ fontSize: 48, color: 'primary.main', mb: 3 }} />

              <List>
                {serviceFeatures.map((feature, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.primary',
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowForward />}
                sx={{ mt: 4, borderRadius: 3, px: 4, py: 1.5, fontWeight: 500 }}
                onClick={() => setShowFrom(true)}
              >
                Book a Call for Pricing
              </Button>
            </Box>
          </motion.div>

          {showForm && <Contact onClose={() => setShowFrom(false)} />}
        </Box>
      </ThemeProvider>
    </section>
  );
};

export default UnifiedServiceCard;
