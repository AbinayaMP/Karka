
// import CssBaseline from '@mui/material/CssBaseline';
// import './App.css';
// import Main from './component/Main';

// function App() {
//   return (
//    <>
//    <CssBaseline />
//    <Main />
  
//    </>
//   );
// }

// export default App;

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Main from './component/Main';

const theme = createTheme({
  palette: {
    background: {
      default: '#0A192F', // your global background color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* resets browser styles */}
      <Main />
    </ThemeProvider>
  );
}

export default App;


