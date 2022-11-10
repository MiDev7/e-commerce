import './App.css';
import Shop from './pages/Shop'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme/OGStheme'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DrawerNavbar from './components/DrawerNavbar';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <DrawerNavbar></DrawerNavbar>
        <Navbar></Navbar>
        
        <Routes>
          <Route/>
        </Routes>
      </Router>
    </ThemeProvider>
      
    </>
  );
}

export default App;
