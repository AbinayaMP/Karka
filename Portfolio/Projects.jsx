import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Material UI.",
    github: "https://github.com/AbinayaMP/Karka/tree/main/Portfolio",
  },
  {
    title: "Bloom – Responsive Webpage",
    description:
      "A clean and modern responsive webpage built with React and Material UI.",
    github: "https://github.com/AbinayaMP/Karka/tree/main/Responsive",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "60vh",
        px: { xs: 2, md: 6 },
        py: 6,
        bgcolor: "#0A192F",
        color: "#FFFFFF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        

      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        component={motion.p}
          initial={{ opacity: 0 ,y:-10}}
          animate={{ opacity: 1 ,y:0}}
          transition={{ delay: 0.1, duration: 0.5 }}
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#64FFDA",
          mt: { xs: 9, sm: 10, md: 9, lg: 13, xl: 13 },
        }}
      >
        Projects
      </Typography>

      {/* Project Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card
              sx={{
                backgroundColor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(6px)",
                borderRadius: 4,
                p: 2,
                textAlign: "center",
                boxShadow: "0px 8px 20px rgba(93, 46, 194, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component={motion.p}
                  initial={{ opacity: 0, x: -100 }} // start from left
                  animate={{ opacity: 1, x: 0 }} // move to center
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  sx={{ fontWeight: "bold", mb: 1 ,color:"white"}}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "#CCD6F6" }}>
                  {project.description}
                </Typography>
                <Button
                  variant="outlined"
                  href={project.github}
                  target="_blank"
                  startIcon={<FaGithub />}
                  sx={{
                    borderColor: "#64FFDA",
                    color: "#64FFDA",
                    "&:hover": { bgcolor: "#64FFDA", color: "#0A192F" },
                  }}
                >
                  GitHub
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
