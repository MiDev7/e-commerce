import React from 'react'
import {
    Paper,
    Typography,
    Box,
    Button
} from '@mui/material'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root:{
        textAlign: 'left',
        background: "linear-gradient(42deg, rgba(66,115,31,1) 0%, rgba(84,140,28,1) 100%) !important" ,
        loading:'lazy',
        display:'inline-block',
        height: '100%',
        borderRadius: '0 350px 350px 0',
        paddingInline: '50px',
        paddingBlock: '50px',
        position:'relative'
    },
    
})

function Banner() {
    const classes = useStyles()
  return (
    <Paper square elevation={0} sx={{overflow: 'hidden', width: '100%', height:'auto', backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Garage1.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}} >
        <Paper variant='outlined'
            square className={classes.root} sx={{
                borderRadius:{
                    xs:'0',
                    sm:'0',
                    md:'0 350px 350px 0'
                },
                width:{
                    sm:'100%',
                    md:'70%',
                    lg:'60%',
                    xl:'47%'
                }
            }}  >
                <Typography gutterBottom variant='h2' color='secondary' fontWeight='600' component='div' sx={{
                    width:{
                        xs:'70px',
                        sm:'350px',
                        md:'450px',
                        lg:'550px'
                    },
                    height: 'auto'
                }}>Welcome to <br/>Online Garage Sale</Typography>
                <Typography variant='body1' color='secondary' sx={{
                    height:'10.5rem',
                    width:{
                        sm:'350px',
                        md:'400px',
                        lg:'550px',
                        xl:'500px'
                    }, 
                    whiteSpace: 'pre-line',  
                    overflow:'hidden',
                    textOverflow: 'ellipsis', 
                    marginTop:'10px'}}   component="div">Praesent sagittis sollicitudin sem, ac tincidunt ante. Mauris tempor, augue id accumsan porta, nulla purus condimentum tortor, a tincidunt lorem libero vel lorem. Praesent ipsum odio, tincidunt nec euismod id, euismod quis lacus. Nullam sit amet aliquet ex. Suspendisse potenti. Vivamus tincidunt luctus turpis eu sagittis. Quisque consectetur mi sed metus sagittis mollis quis ac felis. Sed vitae velit consectetur, blandit ex in, mattis sem. Pellentesque sodales posuere purus. Duis leo nulla, faucibus et egestas vel, venenatis non diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Phasellus egestas mi ut est consequat, ut hendrerit elit tincidunt. Morbi porta eleifend venenatis.</Typography>
                <Box sx={{marginTop:'45px', display:'block !important'}}>
                    <Button variant='contained' disableElevation href='/shop' color='secondary'size='large' sx={{
                        borderRadius:'0px', 
                        fontWeight:'600', 
                        paddingInline:'40px',
                        fontSize:'18px',
                        marginTop:'10px',
                        paddingBlock:'5px',
                        marginRight:'20px'}} >BUY</Button>
                    <Button variant='contained' disableElevation color='secondary' size='large' sx={{
                        borderRadius:'0px', 
                        fontWeight:'600', 
                        paddingInline:'40px',
                        fontSize:'18px',
                        paddingBlock:'5px',
                        marginTop:'10px',
                        marginRight:'20px'}} >TRADE</Button>
                    <Button variant='contained' disableElevation color='secondary'size='large' sx={{
                        borderRadius:'0px', 
                        fontWeight:'600', 
                        paddingInline:'40px',
                        fontSize:'18px',
                        paddingBlock:'5px',
                        marginTop:'10px',
                        marginRight:'20px'}} >SELL</Button>
                </Box>
        </Paper>
    </Paper>
    
  )
}

export default Banner