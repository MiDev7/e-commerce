import './App.css';
import ProductCard from './components/ProductCard';
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme/OGStheme'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <ProductCard></ProductCard>
    </ThemeProvider>
      
    </>
  );
}

export default App;
