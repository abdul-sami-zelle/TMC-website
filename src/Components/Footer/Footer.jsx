import React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import productImage5 from '.././Images/Foot1.png';
import productImage6 from '.././Images/Foot2.png';

const socialMediaLinks = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
};

function Footer() {
  return (
    <Box
      sx={{
        height: '470px',
        bgcolor: '#1C1816',
        color: 'white',
        paddingTop: '65px',
        marginTop: '60px',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} lg={12}  md={12} sx={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'center', textAlign: 'center', fontFamily: 'Raleway', fontWeight: 'bold', color: '#EA002A', width: '400px', }}>
            <Typography variant="h3" gutterBottom sx={{fontFamily: 'Poppins',}}>
              KFC
             
              <IconButton aria-label="Facebook" sx={{backgroundColor:"white",marginRight:'15px',marginLeft:'60px'}} color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{backgroundColor:"white",marginRight:'15px'}} color="inherit" component="a" href={socialMediaLinks.twitter}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{backgroundColor:"white"}} color="inherit" component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>

          <Grid item xs={6} sm={3} md={3} >
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', paddingLeft: '8rem', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              About Us
            </Link>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', paddingLeft: '8rem', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              Mitao Bhook
            </Link>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', paddingLeft: '8rem', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
            Mitao Bhook - Scholarship
            </Link>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', paddingLeft: '8rem', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              Privacy Policy
            </Link>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', paddingLeft: '8rem', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              Career
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              Contact Us
            </Link>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              Store Locator
            </Link>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', color: 'white', textAlign: 'left', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              Track Order
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '19px', color: 'white', textAlign: 'center', paddingLeft: '4rem', marginBottom: '10px', '&:hover': {
                  textDecoration: 'none', color: 'red',}, }}>
              Terms & Conditions
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Link href="https://www.apple.com/app-store/" variant="h6" display="block" sx={{ marginBottom: '10px' }}>
            <img src={productImage5} alt="Foot1" style={{ width: '40%', height: 'auto' }} />
            </Link>
            <Link href="https://play.google.com/store/apps" variant="h6" display="block" sx={{ marginBottom: '10px' }}>
            <img src={productImage6} alt="Foot2" style={{ width: '40%', height: 'auto' }} />
            </Link>
          </Grid>
            <Typography variant="body2" sx={{ pt: 4, fontFamily: 'Poppins', fontSize: '19px', paddingLeft: '24rem', color: 'white', textAlign: 'right', paddingLeft: '6rem', marginBottom: '10px', }}>
                © 2023 KFC. All rights reserved.
            </Typography>
            <Grid item xs={6} sm={3} md={9}>
            <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontSize: '20px', color: 'red', textAlign: 'left', paddingLeft: '57rem', }}>
                Powered by
            </Typography>
            <Link href="#" variant="h6" display="block" sx={{fontFamily: 'Poppins', fontSize: '20px', paddingLeft: '24rem', color: 'white', textAlign: 'right', '&:hover': {
                  textDecoration: 'underline', color: 'red',}, }}>
            Simplex Technologies Solution
            </Link>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
