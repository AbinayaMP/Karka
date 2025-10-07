import React from "react";
import  {Box, Grid, } from '@mui/material'

const Basic=() =>{
    return(
        // <>
        // <Grid container>
        //     <Grid size={{lg:4, md:6, sm:12, xs:12}}>
        //         <Typography variant="h6">Hello</Typography>
        //     </Grid>
        //     <Grid size={{lg:4, md:6, sm:12, xs:12}}>
        //         <Typography variant="h6">Welcome</Typography>
        //     </Grid>
        //      <Grid size={{lg:4, md:6, sm:12, xs:12}}>
        //         <Typography variant="h6">Karka</Typography>
        //     </Grid>
        // </Grid>
        
        // </>

        <>        <Grid container spacing={1} sx={{mt:2} }>
               <Grid size ={{lg:6,md:12, sm:12, xs:12}}>
   <Box sx={{backgroundColor:"orange", height:"50px"}}></Box>
               </Grid>
                <Grid size={{lg:6, md:12,sm:12, xs:12}}>
   <Box sx={{backgroundColor:"orange", height:"50px"}}></Box>
               </Grid>
        </Grid>
        <Grid container sx={{mt:"15px", display:{sm:"none",xs:"flex",md:"flex",lg:"flex"}}}>
            <Grid size={{lg:12,md:12, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"palegreen", height:"150px"}}></Box>
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:"15px"}}>
            <Grid size={{lg:4,md:4, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"blue", height:"170px"}}></Box>
            </Grid>
             <Grid size={{lg:4,md:4, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"blue", height:"170px"}}></Box>
            </Grid>
             <Grid size={{lg:4,md:4, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"blue", height:"170px"}}></Box>
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:"15px"}}>
            <Grid size={{lg:3,md:6, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"lightgrey", height:"65px"}}></Box>
            </Grid>
             <Grid size={{lg:3,md:6, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"lightgrey", height:"65px"}}></Box>
            </Grid>
             <Grid size={{lg:3,md:6, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"lightgrey", height:"65px"}}></Box>
            </Grid>
             <Grid size={{lg:3,md:6, sm:12, xs:12}}>
                <Box sx={{backgroundColor:"lightgrey", height:"65px"}}></Box>
            </Grid>0
        </Grid>
        </>

    )
}
export default Basic