import './App.css';
import Shop from './pages/Shop'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme/OGStheme'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DrawerNavbar from './components/DrawerNavbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <DrawerNavbar></DrawerNavbar>
        <Navbar></Navbar>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
      
    </>
  );
}

export default App;
