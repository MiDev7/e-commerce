import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions, CardMedia, CardContent, Chip } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';


function ProductCard() {
  const [rating, setRating] = useState('0')
  const handleChange = event => {
    setRating(event.target.value)
    console.log(event.target.value)
  };
  return (
    <React.Fragment>
      
        <Card sx={{ maxWidth: 250, borderRadius: 3 }} variant='outlined'>

          <CardActionArea>
            <Chip icon={ <BookmarkIcon fontSize='small'/>}label='New' variant='tag' sx={{position:'absolute'}} color='primary'/>
            <CardMedia
            component="img"
            height="180"
            image="https://images.unsplash.com/photo-1587925420649-89760ff7baab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" fontWeight='600' sx={{color:'#413b3b'}} component="div">
            Pack of 5 Chisels
            </Typography>
            <Typography gutterBottom variant='subtitle2' fontWeight='bold' color='primary'> In Stock</Typography>
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
                onChange={handleChange} value={parseFloat(rating)} 
                precision={0.2}
                sx={{
                  marginBlock:'10px',
                  padding:'0px',
                  marginInline:'0px'
                }}/> {rating}.0
            </Typography>
            
            <Typography variant="price" component='div'>
              MUR 200.00
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
    </React.Fragment>
  )
}

export default ProductCard