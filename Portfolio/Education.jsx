import {
  Box,
  Typography,
  Grid,
  Dialog,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

// Import your certificate images
import Cert1 from "./assets/Cert1.jpg";
import Cert2 from "./assets/Cert2.jpg";
import Cert3 from "./assets/Cert3.jpg";
import Cert4 from "./assets/Cert4.jpg";

const Education = () => {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  const certificates = [
    { img: Cert1, title: "Python Course Certification" },
    { img: Cert2, title: "IT for Non-IT Course Certification" },
    { img: Cert3, title: "Web Development Internship Certification" },
    { img: Cert4, title: "Python Internship Certification" },
  ];

  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 4,
        textAlign: "center",
        bgcolor: "#0A192F",
        color: "white",
        mt: { xs: 9, sm: 10, md: 9, lg: 13, xl: 13 },
      }}
    >
      {/* Education Heading */}
      <Typography
        variant="h4"
        component={motion.p}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontFamily: "'Poppins', sans-serif",
          color: "#64FFDA",
        }}
      >
        Education
      </Typography>

      {/* College */}
      <Typography
        component={motion.p}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{
          maxWidth: "800px",
          mb: 3,
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: 1.6,
          fontFamily: "'Roboto', sans-serif",
          textAlign: "justify",
        }}
      >
        <b>B.E. in Electronics and Communication Engineering</b> with{" "}
        <b>Minor in CSE</b> <br />
        Ponjesly College of Engineering (2021–2025)
        <br />
        CGPA: <b>8.39</b>
      </Typography>

      {/* HSC */}
      <Typography
        component={motion.p}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        sx={{
          maxWidth: "800px",
          mb: 3,
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: 1.6,
          fontFamily: "'Roboto', sans-serif",
          textAlign: "justify",
        }}
      >
        <b>Higher Secondary Certificate </b> <br />
        Alphonsa Matriculation Higher Secondary School (2021)
        <br />
        Percentage: <b>85%</b>
      </Typography>

      {/* SSLC */}
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
          textAlign: "justify",
          mb: 6,
        }}
      >
        <b>Secondary School Leaving Certificate</b> <br />
        Alphonsa Matriculation Higher Secondary School (2019) <br />
        Percentage: <b> 83.8%</b>
      </Typography>

      {/* Certifications Section */}
      <Typography
        variant="h4"
        component={motion.p}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontFamily: "'Poppins', sans-serif",
          color: "#64FFDA",
        }}
      >
        Certifications
      </Typography>

      {/* Certificates Grid */}
      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            sx={{ textAlign: "center" }}
          >
            {/* Certificate Image */}
            <Box
              component="img"
              src={cert.img}
              alt={cert.title}
              onClick={() => handleOpen(cert)}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "contain",
                bgcolor: "white",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              }}
            />
            {/* Title Below Image */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mt: 1, fontFamily: "'Roboto', sans-serif" }}
            >
              {cert.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Modal for enlarged certificate */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box sx={{ position: "relative" }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "black",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Certificate Image */}
          {selectedCert && (
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Education;
