import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions, CardMedia, CardContent, Chip } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';


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

function ProductCard(props) {
  const classes = useStyles()
  
  // const [rating, setRating] = useState('0')
  // const handleChange = event => {
  //   setRating(event.target.value)
  //   console.log(event.target.value)
  // };
  

  return (
    <React.Fragment>
      
          <Card key={props.id} sx={{ maxWidth: 260, borderRadius: 3 }} className={classes.card} variant='outlined'>

          <CardActionArea >
            <Chip icon={ <BookmarkIcon fontSize='small'/>}label='New' variant='tag' sx={{position:'absolute'}} color='primary'/>
            <CardMedia
            component="img"
            height="180"
            image={props.image}
            alt="green iguana"
          />
          <CardContent>
              <Typography variant="h5" fontWeight='600' style={{height:'4rem', whiteSpace: 'pre-line',  overflow:'hidden',textOverflow: 'ellipsis',color:'#413b3b'}}   component="div">
              {props.title} 
              </Typography> 
              <Typography component='span' color='rgba(66,115,31,1)' fontWeight='bold' variant='subtitle2'>In Stock</Typography>
            
            <Typography variant="body2" color="text.secondary" style={{height:'2.5rem', whiteSpace: 'pre-line',  overflow:'hidden',textOverflow: 'ellipsis'}}    >
            {props.description}
            </Typography>
            <Typography variant='h5' justifyContent='center' alignContent='center'>
              <Rating 
                name="customized-10" 
                color='#583f85'  max={5} 
                value={parseFloat(props.rating)} 
                precision={0.2}
                readOnly
                sx={{
                  marginBlock:'10px',
                  padding:'0px',
                  marginInline:'0px'
                }}/> {props.rating.toFixed(1)}
            </Typography>
            
            <Typography variant="price" component='div'>
              $ {props.price}
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