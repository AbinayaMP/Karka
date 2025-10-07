import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        textAlign: "center",
        background: "#0A192F",
        color: "white",
         mt: {xs:9,sm:10,md:9,lg:13,xl:13}
      
      }}
    >
      {/* Name */}
      <Typography

         component={motion.p}
          initial={{ opacity: 0 ,y:-10}}
          animate={{ opacity: 1 ,y:0}}
          transition={{ delay: 0.1, duration: 0.5 }}
      >
        <span
          style={{
            fontFamily: "'Monoton', cursive",
            fontSize: "2.2rem",
            fontWeight: "bold",
            color:"#64FFDA"
          }}
        >
          A
        </span>
        {/* Rest of the Name */}
        <span
          style={{
            fontFamily: "'Monoton', cursive",
            fontSize: "1.4rem",
            color:"#64FFDA"
          }}
        >
          BINAYA
        </span>
      </Typography>
 
      {/* Social Icons */}
      <Box 

      component={motion.p}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      
      sx={{ display: "flex", gap: 3, mb: 3 }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/abinayamp"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <FaLinkedin size={28} />
        </IconButton>

        <IconButton



          component="a"
          href="https://github.com/AbinayaMP"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <FaGithub size={28} />
        </IconButton>

        <IconButton
          component="a"
          href="abinayamp.2003@gmail.com"
          sx={{ color: "white" }}
        >
          <FaEnvelope size={28} />
        </IconButton>
      </Box>

      {/* Footer Text */}
      <Typography variant="body2"
      component={motion.p}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      
      
      sx={{ opacity: 0.8 }}>
        © Abinaya M.P. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Contact;
