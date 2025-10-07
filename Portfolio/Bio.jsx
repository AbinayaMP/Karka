import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width:"100%",
        px: { xs: 2, md: 6 },
        py: 6,
        bgcolor: "#0A192F",
        color: "#FFFFFF",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        textAlign: "justify",

        mt: { xs: 9, sm: 10, md: 9, lg: 13, xl: 13 },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        component={motion.p}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontFamily: "'Poppins', sans-serif",
          color: "#64FFDA",
        }}
      >
        Bio
      </Typography>

      {/* First Paragraph */}
      <Typography
        component={motion.p}
        initial={{ opacity: 0, x: -100 }} // start from left
        animate={{ opacity: 1, x: 0 }} // move to center
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        sx={{
          maxWidth: "800px",
          mb: 2,
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: 1.6,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        I am Abinaya M.P., a B.E. Electronics and Communication Engineering
        graduate with a Minor in Computer Science from Ponjesly College of
        Engineering, where I achieved a CGPA of 8.39. I have completed multiple
        internships in web development, networking, Python, and embedded
        systems, and I am currently undergoing a MERN Full Stack Development
        course at Karka Software Academy.
      </Typography>

      {/* Second Paragraph */}
      <Typography
        component={motion.p}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        sx={{
          maxWidth: "800px",
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: 1.6,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Though my core background lies in Electronics and Communication, my
        strong interest in software development has driven me to explore the IT
        field. I am passionate about building responsive and interactive
        applications using technologies such as HTML, CSS, JavaScript, and
        React. With this growing expertise, I am eager to expand my skills
        further and contribute to innovative digital solutions.
      </Typography>
    </Box>
  );
};

export default Bio;
