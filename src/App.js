import React,{useState} from 'react';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, createTheme ,Stack,ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';




function App() {
  const [mode, setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider   theme={darkTheme} color={"text.white"}>
  <Box bgcolor={"background.default"}>
  <Navbar />
    <Stack direction="row" spacing={3} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed />
      <Rightbar />
    </Stack>
    <Add />
  </Box>
  </ThemeProvider>
  );
}

export default App;
