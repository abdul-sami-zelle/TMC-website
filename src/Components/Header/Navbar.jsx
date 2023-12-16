import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Delivery from '../Images/Delivery.png'; // Import your image for button1
import Pickup from '../Images/Pickup.png'; // Import your image for button2

export default function NavBar({ button1Text, button2Text, button1OnClick, button2OnClick, LoginOnClick }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black', width: '100%' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100px' }}> {/* Adjust height here */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            <span style={{ fontWeight: 'bold', color: 'red', fontFamily: 'Poppins', }}>KFC</span>
          </Typography>
          <Button
            color="inherit"
            onClick={button1OnClick}
            startIcon={<img src={Delivery} alt="Button 1 Image" style={{ width: '20px', marginRight: '5px' }} />} // Insert image for button1
            sx={{
              backgroundColor: '#1c1816',
              color: 'white',
              width: '150px',
              height: '40px',
              border: '1px solid red',
              fontWeight: 'bold',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#1c1816',              
              },
              marginLeft: '20px', // Adjust spacing between buttons
            }}
          >
            {button1Text}
          </Button>
          <Button
            color="inherit"
            onClick={button2OnClick}
            startIcon={<img src={Pickup} alt="Button 2 Image" style={{ width: '20px', marginRight: '5px' }} />} // Insert image for button2
            sx={{
              backgroundColor: '#1c1816',
              color: 'white',
              width: '110px',
              height: '40px',
              border: '2px',
              fontWeight: 'bold',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#1c1816',
              },
              marginLeft: '20px', // Adjust spacing between buttons
            }}
          >
            {button2Text}
          </Button>
          <Button
            color="inherit"
            onClick={LoginOnClick}
            sx={{
              backgroundColor: 'red',
              color: 'white',
              width: '70px',
              height: '40px',
              border: '2px',
              fontWeight: 'bold',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: 'red',
              },
              marginLeft: 'auto', // Align to the right side
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
