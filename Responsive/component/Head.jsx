import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../assets/shop.png";
import Container from "@mui/material/Container";

const Head = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 9, px: 3 }}>
      <Grid
        container
        spacing={8}
        alignItems="center"
        justifyContent="center"
       
      >
     
        <Grid item xs={12} md={6}>
          <Container maxWidth="sm"  >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Bloom Royale
            </Typography><br></br>
            <Typography variant="body1" sx={{textAlign:"justify"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto tempore eveniet dicta dolores, repudiandae
              aperiam et harum soluta expedita! Recusandae maxime autem odit,
              vel nemo laborum optio! Veritatis eligendi fugit officiis quis
              quam sed nam reiciendis natus reprehenderit, odio nesciunt
              corrupti, minima consectetur molestiae quibusdam commodi rem
              incidunt enim?
            </Typography><br></br>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "orange",
                "&:hover": { backgroundColor: "#e68900" },
                borderRadius: "5px",
                px: 3,
              }}
            >
              Learn More
            </Button>
          </Container>
        </Grid>

     
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={image}
            alt="Bloom"
            sx={{
              width: { xs: "100%", sm: "90%", md: "450px" },
              height: { xs: "auto", md: "300px" },
              borderRadius: "8px",
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Head;
