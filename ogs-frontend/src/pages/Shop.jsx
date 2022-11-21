import React,{useEffect, useState} from 'react'
import {Grid }from '@mui/material'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function Shop() {
  const [products, setProducts] = useState([])

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
      <Grid container spacing={2} sx={{paddingInline:'80px', paddingTop:'20px'}}>
        { 
          products.map((product)=>(
          
            <Grid key={product.id} item lg={2} md={3}>
              <ProductCard id={product.id} image={product.images[0]} title={product.title} description={product.description} rating={product.rating} price={product.price} />
            </Grid>
          
          )) 
        }
      </Grid>
    </React.Fragment>
  )
}

export default Shop