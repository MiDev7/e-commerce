import './App.css';
import Shop from './pages/Shop'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme/OGStheme'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Shop></Shop>
    </ThemeProvider>
      
    </>
  );
}

export default App;
