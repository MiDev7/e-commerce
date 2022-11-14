import React from 'react'
import {makeStyles} from '@mui/styles'
import {
    Box, 
    Card,
    Grid,
    Typography,
    CardMedia
} from '@mui/material'

const useStyles = makeStyles({
    root:{
        height: {
            xs:'125px'
        },
        width:{
            xs:'125px'
        },
        '&:hover':{
            transition:'1s',
            height: '203px',
            width:'203px',
        }
    },
    content: {
        position: 'absolute',
        top:'0%',
        left:'0%',
        width: '100%',
        zIndex: 1,
        textAlign:'center',
        verticalAlign:'text-top',
        paddingTop: '4.5em',
        height:'100%',
        background: "linear-gradient(42deg, rgba(66,115,31,1) 0%, rgba(84,140,28,0.85) 70%) " ,
        
    },
})

function Category() {
    const classes = useStyles()
  return (
    <Box sx={{
        paddingInline:{
            xs:'0px',
            sm:'100px',
            md:'150px',
            lg:'200px',
            xl:'250px'
        },
        paddingBlock:'20px'}}>
        <Typography variant='h4' sx={{fontWeight:'600', marginBottom:'25px'}} color='primary'>CATEGORIES</Typography>
        <Grid container spacing={1}>
            {
                categories.map((category)=>(
                    <Grid item lg={2.4} xs={6} sm={4}>
                        <Card className={classes.root}>
                            <Box position={'relative'}>
                                <CardMedia
                                component='img'
                                height='200px'
                                image={`${process.env.PUBLIC_URL}/assets/${category.img}`}
                                />
                                <div className={classes.content}>
                                    <Typography variant={'h5'} sx={{fontWeight:'600'}} color='secondary'>
                                    {category.name}
                                    </Typography>
                                </div>

                            </Box>
                        </Card>
                    </Grid>
                ))
                
            }
            
        </Grid>
    </Box>
  )
}

const categories = [
    {
        name:'SPORTS',
        img:'Sports.jpg',
    },
    {
        name:'ELECTRONIC DEVICES',
        img:'Electronic.jpg',
    },
    {
        name:'HOUSEHOLD FURNITURES',
        img:'Household.jpg'
    },
    {
        name:'MECHANICAL TOOLS',
        img:'Mechanical.jpg'
    },
    {
        name:'GARDENING TOOLS',
        img:'Gardening.jpeg'
    },
    {
        name:'MUSICAL INSTRUMENTS',
        img:'Music.jpg'
    },
    {
        name:'KITCHEN UTENSILS',
        img:'Kitchen.jpg'
    },
    {
        name:'DECORATIONS',
        img:'Deco.jpg'
    },
    {
        name:'TOYS',
        img:'Toys.jpg'
    },
    {
        name:'OTHERS',
        img:'Others.jpg'
    }
]
export default Category