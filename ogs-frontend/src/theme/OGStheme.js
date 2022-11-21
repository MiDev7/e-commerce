import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette:{
      primary:{
        main:'#42731f',
        contrastText: '#F2F2F2'
      },
      secondary:{
        main: '#F2F2F2',
        contrastText: '#42731f'
      },
      error:{
        main: 'rgba(222, 53, 53, 0.9)'
      },
      
    },
    components:{
      MuiChip:{
        variants: [
          {
            props: { variant: 'tag' },
            style: {
              margin: '7px 7px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #548c1c',
              color:'#548c1c',
              fontWeight: '600',
              fontSize: '12px'
            },
          }]
      },
      MuiTypography:{
        variants: [
          {
            props: { variant: 'price' },
            style: {
              height:'5px',
              margin:'10px 0px',
              fontSize: '15pt',
              fontWeight: '600',
              color:'#413b3b'
            },
          },
          {
            props: { variant: 'priceCart' },
            style: {
              height:'5px',
              top:'0',
              marginBottom:'13px',
              fontSize: '14pt',
              fontWeight: '600',
              color:'#413b3b'
            },
          },
          {
            props: { variant: 'stockCart' },
            style: {
              height:'5px',
              marginBottom:'10px',
              fontSize: '10pt',
              fontWeight: '400',
              color:'#413b3b'
            },
          }]
      }
    }
})

export default theme