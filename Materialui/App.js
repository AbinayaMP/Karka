// // import logo from './logo.svg';
// // // import './App.css';

// // import {Typography ,Button,TextField, FormLabel,AppBar,Box,Toolbar} from '@mui/material'
// // import MenuIcon from '@mui/icons-material/Menu';
// // import IconButton from '@mui/material/IconButton';

// // import ImageSearchIcon from '@mui/icons-material/ImageSearch';
// // import ListAltIcon from '@mui/icons-material/ListAlt';

// // function App() {
// //   return (
// //    <>

// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static" color='secondary'>
// //         <Toolbar>
// //           <IconButton
// //             size="large"
// //             edge="start"
// //             color="inherit"
// //             aria-label="menu"
// //             sx={{ mr: 2 }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             News
// //           </Typography>
// //           <Button color="inherit">Login</Button>
// //         </Toolbar>
// //       </AppBar>
// //     </Box>
        


// //    <Typography variant='h1' component='h6' color='primary' align='center'>
// //     Hello
// //    </Typography>
// //      <Typography variant='h2' component='h5' color='error' sx={{backgroundColor:"purple"}}>
// //     Hello
// //    </Typography>
// //      <Typography variant='h3' component='h4' color='secondary'>
// //     Hello
// //    </Typography>
// //      <Typography variant='h4' component='h3' color='warning' align='center'>
// //     Hello
// //    </Typography>
// //      <Typography variant='h5' component='h2' color='green' sx={{backgroundColor:"blue"}}>
// //     Hello
// //    </Typography>
// //      <Typography variant='h6' component='h1' color='black' sx={{padding:"50px"}}>
// //     Hello
// //    </Typography>
// //    <Typography variant='h1' component='h5' color='secondary' sx={{backgroundColor:"black"}}>
// //     Welcome
// //    </Typography>


// //      <Button variant="text">Text</Button>
// //       <Button variant="contained"  disabled sx={{backgroundColor:"green", color:"blue"}}>Contained</Button>
// //       <Button variant="outlined" color='primary'>Outlined</Button>
// //       <Button variant='contained' color='error' size='small' startIcon={< ImageSearchIcon  fontSize='large'/>}>Button</Button>
       
// //       <Button variant="outlined" href="#outlined-buttons">

// //   Link
// // </Button>


// //       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
// //       <TextField id="filled-basic" label="Filled" variant="filled" />
// //       <TextField id="standard-basic" label="Standard" variant="standard" />


// //       <FormLabel for='box' sx={{backgroundColor:"red"}}>Name</FormLabel>
// //       <FormLabel for='box'>Age</FormLabel>

// //       < ImageSearchIcon  fontSize='large'/>

      
// //         <Button variant="contained" sx={{backgroundColor:'yellowgreen', color:'red' }} startIcon={  <ListAltIcon fontSize='large'/>}>Contained</Button>
// //         <TextField id='outlined-basic' label='outlined' variant='outlined'></TextField>
// //    </>
// //   );
// // }

// // export default App;





// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;


import Gridmap  from './component/Gridmap'
// import Basicgrid from "./component/Basicgrid";
function App(){
  return(
    // <Basicgrid />
    <Gridmap />
  )
  
}
export default App







