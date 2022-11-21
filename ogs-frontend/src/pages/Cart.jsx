import React, {useState, useEffect} from 'react'
import {Card, CardMedia,Box, Grid, CardContent, Typography, InputBase, Paper, IconButton, Divider} from '@mui/material'
import {makeStyles} from '@mui/styles'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import axios from 'axios'

const useStyles = makeStyles({
 inputBase: {

 }
})


function Cart() {
  const [cartProducts, setCartProduct] = useState([])
  const url = 'https://dummyjson.com/carts/1'
  useEffect(()=>{
    async function getProductData(){
      const response =  await axios.get(url)
      const data = response.data
      // const cartProducts = data.products
      const cart = data.products
      console.log(cart)
      setCartProduct(cart)
    }

    getProductData()
  },[]) 

  return (
    <React.Fragment>
      {console.log(cartProducts)}
      { cartProducts.map((cartProduct)=>(
        <Card key={cartProduct.id} sx={{ display: 'flex', width: '600px', height:'125px' }}>
        <CardMedia
        image='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        sx={{width:'150px', margin:'5px', borderRadius:'10px'}}
        component='img'
        lazy='loading'
        alt='Product 1'
        />
        <Box sx={{display:'flex', width:'100%'}} >
          <Grid container spacing={0}>
            <Grid item xs={6}>
             <CardContent>
              <Typography component='div' variant='body2'>{cartProduct.title}</Typography>
              <Typography component='div' variant='priceCart'>$ {cartProduct.price}</Typography>
              <Typography component='div' variant='stockCart'>In Stock</Typography>
              <Paper component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 85, height: 20 }}>
                <IconButton sx={{ p: '2px' }} aria-label="menu">
                  <RemoveRoundedIcon sx={{fontSize:'medium'}}/>
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <InputBase
                  sx={{textAlign:'center',ml: 1.3, flex: 1}}
                  
                  inputProps={{ 'aria-label': 'search google maps' }}

                  defaultValue={cartProduct.quantity}
                  
                />  
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" sx={{ p: '2px' }} onClick={()=> cartProduct.quantity = cartProduct.quantity + 1 } aria-label="search">
                  <AddRoundedIcon sx={{fontSize:'medium'}}/> 
                </IconButton>
              </Paper>
             </CardContent>
            </Grid>
            <Grid item xs={6}>
             
            </Grid>
          </Grid>

        </Box>
      </Card>
      ))}
      
      
    </React.Fragment>
  )
}

export default Cart