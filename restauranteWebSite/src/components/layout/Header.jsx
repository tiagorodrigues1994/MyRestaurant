import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, Divider } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography
        color={'gold'}
        variant='h6'
        component='div'
        sx={{ flexGrow: '1', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
        <img src={Logo} alt="logo" height={'70'} width='200' />
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', mt:'100px', height:'300px', justifyContent:'space-around'}}>
       
        <Button component={Link} to={'/'} sx={{ textTransform: 'none',fontSize:'18px', fontWeight:'bold' }} color="inherit">Home</Button>
        <Button component={Link} to={'/about'} sx={{ textTransform: 'none',fontSize:'18px', fontWeight:'bold' }} color="inherit">About</Button>
        <Button component={Link} to={'/contact'} sx={{ textTransform: 'none',fontSize:'18px', fontWeight:'bold' }} color="inherit">Contact</Button>
        <Button component={Link} to={'/menu'} sx={{ textTransform: 'none',fontSize:'18px', fontWeight:'bold' }} color="inherit">Menu</Button>
      </Box>


    </Box>
  )

  return (
    <Box >
      <AppBar
        component={'nav'}
        sx={{ bgcolor: 'black' }}>
        <Toolbar>

          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            sx={{ mr: 2, display: { sm: 'none' }, }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />

          </IconButton>

          <Typography
            color={'gold'}
            variant='h6'
            component='div'
            sx={{ flexGrow: '1', display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="logo" height={'70'} width='250' />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

          <Button
        component={Link}
        to={'/'}
        sx={{
          textTransform: 'none',
          '&:hover': { backgroundColor: 'orange' },
          '&.selected': { backgroundColor: 'orange' }, 
        }}
        color="inherit"
      >
        Home
      </Button>
            <Button component={Link} to={'/about'}  sx={{
          textTransform: 'none',
          '&:hover': { backgroundColor: 'orange' },
          '&.selected': { backgroundColor: 'orange' }, 
        }} color="inherit">About</Button>
            <Button component={Link} to={'/contact'}  sx={{
          textTransform: 'none',
          '&:hover': { backgroundColor: 'orange' },
          '&.selected': { backgroundColor: 'orange' }, 
        }} color="inherit">Contact</Button>
            <Button component={Link} to={'/menu'}  sx={{
          textTransform: 'none',
          '&:hover': { backgroundColor: 'orange' },
          '&.selected': { backgroundColor: 'orange' }, 
        }} color="inherit">Menu</Button>


          </Box>

        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen} onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', sm: 'none'}, '& .MuiDrawer-paper':{
            boxSizing:'border-box',
            width:'240px',
          
          } }}
        >
          {drawer}
        </Drawer>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
