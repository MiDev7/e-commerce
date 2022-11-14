import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '18ch',
      '&:focus': {
        width: '22ch',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
      '&:focus': {
        width: '40ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '50ch',
      '&:focus': {
        width: '60ch',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '70ch',
      '&:focus': {
        width: '80ch',
      },
    },
  },
  
}));

export default function SearchAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 ,display:'sticky', marginTop:'56px', width:'100%'}}>
        <AppBar position="static" >
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Box
              component="img"
              sx={{
                height: 40,
                width: 'auto',
                maxHeight: { xs:0, md: 30 },
              }}
              alt="Online Garage Sale Logo"
              src={`${process.env.PUBLIC_URL}/assets/GarageSaleWhite.png`}
            />
            <Search sx={{
              marginInline:{
                xs:'0px',
                sm:'80px',
                md:'100px',
                lg:'150px',
                xl:'300px'
              },
              
              width:'700px'}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                color='secondary'
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton color="inherit" sx={{
              marginRight: '15px'
            }}>
              <LocalMallOutlinedIcon/>
              
            </IconButton>
            <IconButton color="inherit">
              <PermIdentityIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      
    </>
  );
}
