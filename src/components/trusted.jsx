import React from 'react';
import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { keyframes } from '@emotion/react';

// Dark theme
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
    body1: { fontSize: '0.95rem', lineHeight: 1.6 },
  },
});

// Keyframes for infinite scroll left
const scrollLeft = (scrollWidth) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-${scrollWidth}px);
  }
`;

const PartnersSection = () => {
  const partnerLogos = [
    "https://upload.wikimedia.org/wikipedia/en/6/6c/ASML_Holding_N.V._logo.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmWokeCXHR-HfxNspDC4B6v9X8kQ3J05ExQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtzRb4qOjrR1jngw46mkHOu5k7OXo9SPTdA&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Liteon_logo.svg/1280px-Liteon_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZHgUnp4JevluIic6tZh5xURVQt5cAJVnMw&s",
    "https://images.icon-icons.com/2235/PNG/512/symbian_os_logo_icon_134679.png",
  ];

  // Dimensions
  const logoWidth = 150; // px width of one logo container
  const logoMarginX = 8; // px margin each side
  const logosVisible = 4;

  // Total width of one set of logos (single loop)
  const singleSetWidth = partnerLogos.length * (logoWidth + logoMarginX * 2);

  // Animation with dynamic scroll width
  const scrollAnimation = scrollLeft(singleSetWidth);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'background.default',
          py: 6,
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: 600, mb: 4 }}
        >
          Trusted by Industry Leaders
        </Typography>

        {/* Outer container - fixed width to show exactly 4 logos */}
        <Box
          sx={{
            width: logosVisible * (logoWidth + logoMarginX * 2),
            overflow: 'hidden',
            mx: 'auto',
          }}
        >
          {/* Inner container - duplicated logos to enable infinite scroll */}
          <Box
            sx={{
              display: 'flex',
              whiteSpace: 'nowrap',
              animation: `${scrollAnimation} 30s linear infinite`,
              // Set width to double to fit duplicated logos inline
              width: singleSetWidth * 2,
            }}
          >
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  width: logoWidth,
                  mx: logoMarginX,
                }}
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  style={{
                    height: 80,
                    width: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PartnersSection;
