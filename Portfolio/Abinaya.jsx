import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Photo from "./assets/Photo.JPG";
import Resume from "./assets/Resume.pdf";

const Abinaya = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // column on small, row on bigger screens
        justifyContent: "center",
        alignItems: "center",
       
          px: { xs: 2, md: 6,lg:25 },
        py: 6,
        bgcolor: "#0A192F",
        color: "white",
        mt: 2,
        gap: 4, // space between text and image
      }}
    >
      {/* Left Section - Text */}
      <Box sx={{ flex: 1 }}>
        {/* Name */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            cursor: "pointer",
            transition: "color 0.3s",
            fontSize: { lg: "90px", xs: "40px" },
            // pt: { xs: "56px", md: "64px" },
            "&:hover": {
              animation: "colorBlink 1s infinite alternate",
            },
            "@keyframes colorBlink": {
              "20%": { color: "#ffcc00" },
              "100%": { color: "#00e5ff" },
            },
          }}
        >
          Abinaya M.P
        </Typography>

        {/* Greeting */}
        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem", lg: "50px" },
            mt: 1,
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Hey! Welcome 👋
        </Typography>

        {/* Short Bio */}
        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          sx={{
            maxWidth: "600px",
            mt: 2,
            fontSize: { xs: "0.95rem", md: "1.1rem", lg: "1.4rem" },
            lineHeight: 1.6,
            fontFamily: "'Roboto', sans-serif",
            textAlign: "justify",
          }}
        >
          I am a passionate <b>Frontend Developer </b>shaping engaging and
          modern digital experiences. I craft responsive and interactive UIs
          that bring ideas to life on the web.
        </Typography>

        {/* Buttons */}
        <Box mt={3} display="flex" gap={3}>
          <Button
            variant="outlined"
            component="a"
            href={Resume} // match exact filename
            download="Resume.pdf"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                animation: "colorBlink 1s infinite alternate",
                backgroundColor: "#00e5ff",
              },
              transition: "color 0.3s",
              "@keyframes colorBlink": {
                "100%": { color: "#1e1981ff" },
              },
            }}
          >
            <b>Download Resume</b>
          </Button>
        </Box>
      </Box>

      {/* Right Section - Image */}
      <Box
        component="img"
        src={Photo}
        alt="Abinaya"
        sx={{
          flex: 1,
          width: {
            xs: "250px",
            sm: "500px",
            md: "400px",
            lg: "300px",
            xl: "200px",
          }, // responsive size
          height: {
            xs: "250px",
            sm: "400px",
            md: "400px",
            lg: "300px",
            xl: "450px",
          }, // same as width
          borderRadius: "50px", // change to "50%" for circle profile photo
          boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",

          // keeps image proportional
        }}
      />
    </Box>
  );
};

export default Abinaya;
