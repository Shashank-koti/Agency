import React, { useRef } from 'react';
import { Box, Typography, Stack, Chip, Container } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import image1 from '../assets/image1.png';

// Import relevant icons
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import ApiIcon from '@mui/icons-material/Api';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function ServicesSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // Independent in-view hooks for each service
  const isInView1 = useInView(ref1, { once: true, margin: '-100px' });
  const isInView2 = useInView(ref2, { once: true, margin: '-100px' });
  const isInView3 = useInView(ref3, { once: true, margin: '-100px' });

  const chipStyle = {
    bgcolor: '#1a1a1a',
    color: '#fff',
    fontWeight: 500,
    px: 2,
    py: 1,
    fontSize: 13,
  };

  return (
    <Box
      id="services"
      sx={{
        bgcolor: '#000',
        color: '#fff',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Chip
          label="Our Services"
          sx={{
            bgcolor: '#1a1a1a',
            color: '#fff',
            mb: 2,
            fontWeight: 'bold',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontSize: 14,
          }}
        />

        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            lineHeight: 1.2,
          }}
        >
          Taking Your Business Higher Online
        </Typography>

        <Typography
          variant="subtitle1"
          color="#aaa"
          mb={6}
          sx={{ px: { xs: 1, sm: 6 } }}
        >
          We design, build, and optimize modern websites that drive traffic,
          boost engagement, and scale your business.
        </Typography>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 6 }}>
        {/* Service 1 */}
        <Stack
          ref={ref1}
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
          mb={8}
          component={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Box
            sx={{
              bgcolor: '#111',
              width: { xs: '100%', md: '50%' },
              height: { xs: 250, md: 400 },
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 4,
              overflow: 'hidden',
            }}
          >
            <img
              src={image1}
              alt="Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Chip
              icon={<DesignServicesIcon />}
              label="Responsive Design"
              sx={{
                bgcolor: '#1a1a1a',
                color: '#fff',
                mb: 2,
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 2,
              }}
            />

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              Remarkable Design. Real Results.
            </Typography>

            <Typography variant="body2" color="#bbb" mb={3}>
              Whether it's a landing page or a full-stack app, we bring
              your ideas to life with elegant, scalable, and lightning-fast
              solutions.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              flexWrap="wrap"
            >
              <Chip
                icon={<CodeIcon />}
                label="Frontend + Backend"
                sx={chipStyle}
              />
              <Chip
                icon={<SpeedIcon />}
                label="SEO Ready"
                sx={chipStyle}
              />
            </Stack>
          </Box>
        </Stack>

        {/* Service 2 */}
        <Stack
          ref={ref2}
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
          mb={8}
          component={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Chip
              icon={<ApiIcon />}
              label="Custom Web Apps"
              sx={{
                bgcolor: '#1a1a1a',
                color: '#fff',
                mb: 2,
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 2,
              }}
            />

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              Tailor-Made for Your Business
            </Typography>

            <Typography variant="body2" color="#bbb" mb={3}>
              We create scalable, feature-rich web applications that are uniquely
              crafted for your brand and workflow.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              flexWrap="wrap"
            >
              <Chip
                icon={<ApiIcon />}
                label="Custom APIs"
                sx={chipStyle}
              />
              <Chip
                icon={<IntegrationInstructionsIcon />}
                label="Third-Party Integration"
                sx={chipStyle}
              />
            </Stack>
          </Box>

          <Box
            sx={{
              bgcolor: '#111',
              width: { xs: '100%', md: '50%' },
              height: { xs: 250, md: 400 },
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 4,
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1683288662040-5ca51d0880b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tJTIwd2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
              alt="Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius:"20px"
              }}
            />
          </Box>
        </Stack>

        {/* Service 3 */}
        <Stack
          ref={ref3}
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
          component={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Box
            sx={{
              bgcolor: '#111',
              width: { xs: '100%', md: '50%' },
              height: { xs: 250, md: 400 },
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 4,
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWduJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
              alt="Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius:"20px"
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Chip
              icon={<SecurityIcon />}
              label="Secure & Fast Hosting"
              sx={{
                bgcolor: '#1a1a1a',
                color: '#fff',
                mb: 2,
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 2,
              }}
            />

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              Reliable Performance with Security
            </Typography>

            <Typography variant="body2" color="#bbb" mb={3}>
              We provide robust hosting solutions ensuring your site is blazing fast and securely protected 24/7.
            </Typography>

            <Stack
              direction="row"
              spacing={4}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              flexWrap="wrap"
              color="#fff"
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <SecurityIcon fontSize="small" />
                <Typography variant="body2">Top-Level Security</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <SpeedIcon fontSize="small" />
                <Typography variant="body2">Fast Loading</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <SupportAgentIcon fontSize="small" />
                <Typography variant="body2">24/7 Support</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
