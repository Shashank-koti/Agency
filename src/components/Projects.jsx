import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Custom-built online store with seamless checkout, product catalog, and payment gateway integration to boost sales and customer experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RSUyMENvbW1lcmNlJTIwV2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Wanderlust Hotel Booking Platform",
    description:
      "Wanderlust is a sleek and user-friendly hotel booking platform designed to simplify travel planning. It offers real-time room availability, seamless booking management, secure payment integration, and personalized recommendations based on user preferences.",
    image:
      "https://plus.unsplash.com/premium_photo-1661777411265-f5b983c31171?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG90ZWwlMjBCb29raW5nJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Restaurant Website & Booking",
    description:
      "Elegant restaurant website with menu display, online table reservation system, and integrated Google Maps for easy location access.",
    image:
      "https://plus.unsplash.com/premium_photo-1663076035579-727173643e51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVzdGF1cmFudCUyMFdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Visually stunning portfolio site with smooth scrolling, project showcases, and contact forms tailored for creatives and freelancers.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9ydGZvbGlvJTIwV2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Event Management Platform",
    description:
      "Scalable event management web app featuring event listings, ticket booking, and user notifications, optimized for desktop and mobile.",
    image:
      "https://images.unsplash.com/photo-1712903276023-f969c7a890bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXZlbnQlMjBNYW5hZ2VtZW50JTIwUGxhdGZvcm18ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    title: "RideShare: Affordable Ride-Sharing Platform",
    description:
      "Connect riders and drivers with smart matching and pricing algorithms.RideShare Pro is a web app facilitating safe, affordable rides by matching users with nearby drivers.",
    image:
      "https://images.unsplash.com/photo-1619617943873-5e36d73f284e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJpZGUlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
  },
];

const cardVariants = {
  offscreen: { y: 60, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        py: 8,
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Delivered Projects
        </Typography>

        {/* Flex container for projects */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {projects.map(({ id, title, description, image }) => (
            <motion.div
              key={id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              style={{ flexBasis: "48%", minWidth: "300px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  bgcolor: "#1e1e1e",
                  color: "white",
                  boxShadow: "0 6px 20px rgba(187, 134, 252, 0.25)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 40px rgba(187, 134, 252, 0.6)",
                  },
                }}
                elevation={6}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={title}
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
