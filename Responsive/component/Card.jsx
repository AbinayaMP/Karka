import { Box, Typography, Button } from "@mui/material";

const Card = ({ item }) => {
  return (
    <Box
      sx={{
        width: { xs: "80%", sm: "250px", md: "280px",lg:"290px" }, 
        p: 3,
        textAlign: "left",
        backgroundColor: "white",
        boxShadow: 3,
        borderRadius: 2,
    
        
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: "100%",
          height: "180px",
         
        
        }}
      />
      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
        {item.title}
      </Typography>
      <Typography variant="body2" sx={{ my: 1, color: "gray" }}>
        {item.desc}
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "orange",
          mt: 1,
          "&:hover": { backgroundColor: "#e69500" },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default Card;
