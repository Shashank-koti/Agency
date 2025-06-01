import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from "../animations/mainLogo.png";

export default function Footer() {
  const socials = [
    { name: 'Instagram', icon: <InstagramIcon sx={{ mr: 0.5 }} />, url: 'https://www.instagram.com/shashichowdary_5/' },
    { name: 'Facebook', icon: <FacebookIcon sx={{ mr: 0.5 }} />, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: <LinkedInIcon sx={{ mr: 0.5 }} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <TwitterIcon sx={{ mr: 0.5 }} />, url: 'https://twitter.com' },
  ];

  return (
    <section id='contact'>
    <Box sx={{ backgroundColor: '#000', color: 'white', px: 8, py: 10 }}>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={4}>
        {/* Left Content */}
        <Box flex={1} minWidth={260} maxWidth={360}>
          <Box display="flex" alignItems="center" mb={2}>
            <Box
              component="img"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="logo"
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <img
                src={Logo}
                alt="WebWave Logo"
                style={{
                height: 50,
                width: "auto",
                objectFit: 'contain',
                display: 'block',
                marginLeft:20
                }}
            />
          </Box>
          <Typography variant="body1" paragraph>
            Expert Web Development Solutions to Build Fast, Scalable, and Engaging Digital Experiences.
          </Typography>
        </Box>

        {/* Right Content */}
        <Box display="flex" flex={2} justifyContent="space-evenly" flexWrap="wrap" gap={2}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Links
            </Typography>
            {['Web Design', 'Development Process', 'Portfolio', 'Client Benefits', 'Pricing'].map((text) => (
              <Typography key={text} variant="body2" sx={{ mt: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  {text}
                </Link>
              </Typography>
            ))}
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Pages
            </Typography>
            {['Home', 'About Us', 'Services', 'Contact Us', '404 Page'].map((text) => (
              <Typography key={text} variant="body2" sx={{ mt: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  {text}
                </Link>
              </Typography>
            ))}
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Socials
            </Typography>
            {socials.map(({ name, icon, url }) => (
              <Typography key={name} variant="body2" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                <Link href={url} target="_blank" rel="noopener" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                  {icon} {name}
                </Link>
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mt={6} borderTop={1} borderColor="#333" pt={2} flexWrap="wrap">
        <Typography variant="body2" align="center" sx={{ color: 'gray' }}>
          © 2025 WebWave. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Visioned and Crafted by <b>Shashank Koti</b>
        </Typography>
      </Box>
    </Box>
    </section>
  );
}
