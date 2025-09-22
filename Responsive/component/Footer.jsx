import { Box, Grid, Typography, Stack, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GoogleIcon from "@mui/icons-material/Google";

const PageLayout = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box sx={{ backgroundColor: "#333333", color: "white", mt: 4, p: 4 }}>
       
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        
          <Grid container spacing={10} >
            <Grid size ={{lg:4,md:4,sm:12,xs:12}}>
              <Typography variant="h6" m fontWeight="bold" >
                Latest Posts
              </Typography><br></br>

              {[1, 2, 3].map((post) => (
                <Stack key={post} direction="row" spacing={2} mb={2}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      p: 1,
                      borderRadius: "4px",
                      minWidth: "50px",
                    }}
                  >
                    <Typography variant="caption">AUG</Typography>
                    <Typography variant="h6" fontWeight="bold">
                      25
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      August 25th Flat Sale
                    </Typography>
                    <Typography variant="body2" color="white">
                      Charming blooms at irresistible prices.
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Grid>

            <Grid size ={{lg:4,md:4,sm:12,xs:12}}  >
              <Typography variant="h6"  fontWeight="bold">
                About
              </Typography><br></br>
               <Typography variant="body2" color="white" sx={{textAlign:"justify"}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ab quas tempore asperiores numquam iusto corporis sit unde dolore! Numquam quas nisi velit est, <br />repudiandae officiis corporis nihil quibusdam esse ducimus accusantium magnam illum reiciendis consectetur autem inventore nam atque ea ipsa culpa cumque nobis quos non nesciunt? Consectetur, sunt!
              </Typography>
             
            </Grid>

            <Grid size ={{lg:4,md:4,sm:12,xs:12}}>
              <Typography variant="h6"  fontWeight="bold">
                Stay Connected
              </Typography><br></br>
              <Stack spacing={1}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <FacebookIcon sx={{ color: "#1877F2" }} />
                  <Link href="#" color="white" underline="none" sx={{fontSize:"20px"}}>
                    Facebook
                  </Link>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <TwitterIcon sx={{ color: "#1DA1F2" }} />
                  <Link href="#" color="white" underline="none" sx={{fontSize:"20px"}}>
                    Twitter
                  </Link>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <RssFeedIcon sx={{ color: "orange" }} />
                  <Link href="#" color="white" underline="none" sx={{fontSize:"20px"}}>
                    RSS
                  </Link>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GoogleIcon sx={{ color: "red" }} />
                  <Link href="#" color="white" underline="none" sx={{fontSize:"20px"}}>
                    Google+
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          <b>
          Copyright (c) 2013. All rights reserved Bloom Web Design</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default PageLayout;
