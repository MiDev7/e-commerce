import React, { useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions, CardMedia, CardContent, Chip } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';
import axios from 'axios'

const useStyles = makeStyles({
  tagLine: {
    fontWeight: '600',
    color:'#413b3b',
    fontSize: '8px'
  },
  card: {
    padding: '0px',
    margin:'0px'
  }
})

function ProductCard() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  // const [rating, setRating] = useState('0')
  // const handleChange = event => {
  //   setRating(event.target.value)
  //   console.log(event.target.value)
  // };
  const url = 'https://dummyjson.com/products'
  useEffect(()=>{
    async function getProductData(){
      const response =  await axios.get(url)
      const data = response.data
      console.log(data.products)
      setProducts(data.products)
    }

    getProductData()
  },[])

  return (
    <React.Fragment>
      {
        products.map((product)=>(
          <Card key={product.id} sx={{ maxWidth: 260, borderRadius: 3 }} className={classes.card} variant='outlined'>

          <CardActionArea >
            <Chip icon={ <BookmarkIcon fontSize='small'/>}label='New' variant='tag' sx={{position:'absolute'}} color='primary'/>
            <CardMedia
            component="img"
            height="180"
            image={product.images[0]}
            alt="green iguana"
          />
          <CardContent>
              <Typography variant="h5" fontWeight='600' height='75px' sx={{color:'#413b3b'}} component="div">
              {product.title} <Typography component='span' color='rgba(66,115,31,1)' fontWeight='bold' variant='subtitle2'>In Stock</Typography>
              </Typography> 
            
            <Typography variant="body2" color="text.secondary" style={{height:'2.5rem', whiteSpace: 'pre-line',  overflow:'hidden',textOverflow: 'ellipsis'}}    >
            A pack of 5 high quality hand - made Chisels, extremely sharp and manufactured under High Quality Control. The Wood Handles are meticulously selected from hardwood timbers to ensure a comfortable yet secure grip while using. These handy tools can be used in slab entertaining and cutting curves in Plywood when building projects. 

            Product Features
            - High Quality Sliding Debug Chisel, extremely sharp. 
            - Perfect for woodworking and DIY enthusiasts. .
            </Typography>
            <Typography variant='h5' justifyContent='center' alignContent='center'>
              <Rating 
                name="customized-10" 
                color='#583f85' 
                defaultValue={2} max={5} 
                // onChange={handleChange}  
                value={parseFloat(product.rating)} 
                precision={0.2}
                sx={{
                  marginBlock:'10px',
                  padding:'0px',
                  marginInline:'0px'
                }}/> {product.rating.toFixed(1)}
            </Typography>
            
            <Typography variant="price" component='div'>
              $ {product.price}
            </Typography>
            
          </CardContent>
            
          </CardActionArea>
          <CardActions >
              <Button  size="medium" variant='contained' sx={{fontWeight:600, background: 'linear-gradient(42deg, rgba(66,115,31,1) 0%, rgba(84,140,28,1) 100%)', marginBlockEnd:'10px', marginInline:'3px' }} fullWidth justify='center'>
                <ShoppingCartOutlinedIcon sx={{ marginRight:2 }}/>
                Add to Cart
              </Button>
          </CardActions>
          </Card>
        ))
      }
      
        
    </React.Fragment>
  )
}

export default ProductCard