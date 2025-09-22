import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import image1 from "../assets/pink.png";
import image2 from "../assets/red.png";
import image3 from "../assets/yellow.png";

import Card from "./Card";

const bouquet = [
  {
    img: image1,
    title: <b>Blush Charm</b>,
    desc:<b>A delicate bouquet of soft pink blooms that radiates elegance and  affection.</b> ,
  },
  {
    img: image2,
    title: <b>Scarlet Love</b>,
    desc:<b>Vibrant red flowers arranged to express desire, admiration and affection.</b> ,
  },
  {
    img: image3,
    title: <b>Golden Glow</b>,
    desc: <b>A vibrant bouquet of sunny yellow blooms that spreads warmth, joy, and positivity.</b>,
  },
];

const Body = () => {
  return (
    <Box sx={{ backgroundColor: "white", py: 10 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ mb: 6, fontWeight: "bold", ml:"20px",fontSize:"30px"}}
        >
          This is a Heading
        </Typography>

        <Grid container spacing={8}>
          {bouquet.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Body;
