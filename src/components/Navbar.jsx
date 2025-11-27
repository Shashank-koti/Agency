import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Stack,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../animations/mainLogo.png";
import ContactForm from "./ContactForm";

const navLinks = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "#0d0d0d", boxShadow: "none", zIndex: 10 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <a href="#home">
            <Box
              component="img"
              src={Logo}
              alt="WebWave Logo"
              sx={{
                height: 80, // responsive sizes
                width: "auto",
                objectFit: "contain",
                ml: 4,
              }}
            />
          </a>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    bgcolor: "#0d0d0d",
                    height: "100%",
                    color: "#fff",
                  }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navLinks.map((text) => (
                      <ListItem button key={text}>
                        <a
                          href={`#${text.toLowerCase()}`}
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          {text}
                        </a>
                      </ListItem>
                    ))}
                    <ListItem>
                      <Button
                        variant="contained"
                        onClick={() => setShowForm(true)}
                        sx={{
                          bgcolor: "#9b5de5",
                          textTransform: "none",
                          fontWeight: "bold",
                          borderRadius: 2,
                          width: "100%",
                        }}
                      >
                        Book a call
                      </Button>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              {navLinks.map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  {text}
                </a>
              ))}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#9b5de5",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: 2,
                  px: 3,
                }}
                onClick={() => setShowForm(true)}
              >
                Book a call
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </>
  );
}
