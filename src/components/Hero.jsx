import React from 'react';
import { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Contact from './ContactForm';

export default function Hero() {

  const [showForm, setShowForm] = useState(false);

  return (
    <section id='home'>
    <Container
      maxWidth={false}
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        position: 'relative',
        zIndex: 1,
        marginTop:10
      }}
    >
      {/* Chip - from top */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Chip
          icon={<RocketLaunchIcon sx={{ color: '#fff' }} />}
          label="Fast. Fluid. Functional."
          sx={{
            bgcolor: '#6c47ff',
            color: '#fff',
            fontWeight: 'bold',
            mb: 3,
            px: 1.5,
            py: 0.5,
            fontSize: 14,
          }}
        />
      </motion.div>

      {/* Headings - from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          lineHeight={1.2}
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
        >
          Professional Web Services
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          lineHeight={1.2}
          color="#d0bfff"
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
        >
          for Growing Brands.
        </Typography>
      </motion.div>

      {/* Subtitle - from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
      >
        <Typography variant="subtitle1" sx={{ mt: 3, color: '#aaa' }}>
          We turn your ideas into reality through elegant, optimized web solutions.
        </Typography>
      </motion.div>

      {/* Buttons - from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={5}
          width="100%"
          maxWidth={400}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#9b5de5',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                bgcolor: '#7b3fe0',
              },
            }}
            onClick={() => setShowForm(true)}
          >
            Get in touch
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#fff',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                borderColor: '#aaa',
                color: '#aaa',
              },
            }}
          ><a href="#services">View services</a>
          </Button>
        </Stack>
      </motion.div>
    </Container>


    {showForm && <Contact onClose={() => setShowForm(false)} />}
    </section>
  );
}
