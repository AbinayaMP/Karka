import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";

// FontAwesome icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

// SimpleIcons icons
// import {
//   SiPython,
//   SiMongodb,
//   SiMaterialui,
//   SiExpress,
//   SiVisualstudio,
// } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" size={40} /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={40} /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },
  //   { name: "Python", icon: <SiPython color="#3776AB" size={40} />, level: 75 },
  { name: "React.js", icon: <FaReact color="#61DAFB" size={40} /> },
  //   { name: "Material UI", icon: <SiMaterialui color="#007FFF" size={40} />, level: 80 },
  { name: "GitHub", icon: <FaGithub color="#181717" size={40} /> },
  //   { name: "VS Code", icon: <SiVisualstudio color="#007ACC" size={40} />, level: 90 },
  //   { name: "Express.js", icon: <SiExpress color="#FFFFFF" size={40} />, level: 70 },
  { name: "Node.js", icon: <FaNodeJs color="#339933" size={40} /> },
  //   { name: "MongoDB", icon: <SiMongodb color="#47A248" size={40} />, level: 75 },
];

const Skills = () => {
  return (
    <Box
      sx={{
        
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        textAlign: "justify",
        bgcolor: "#0A192F",
        color: "white",
         py: 6,
        mt: { xs: 9, sm: 10, md: 9, lg: 13, xl: 13 },
      }}
    >
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
          color: "#64FFDA"
        }}
      >
        Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "600",color:"white" }}
                  >
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
