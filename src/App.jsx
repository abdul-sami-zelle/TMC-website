import React from 'react';
import "./App.css";
import NavBar from './Components/Header/Navbar';
import Slider from './Components/Body/Slider';
import ReOrderButton from './Components/Body/ReorderBtn';
import Carousel from "react-multi-carousel";
// import EMCards from './Components/Body/Cards/EMCards'
import "react-multi-carousel/lib/styles.css";
import EMCardsupdate from "./Components/Body/Cards/Emcardsupdate";
import { productData3, responsive1 } from "./Components/Body/Cards/EMdata";
import Product from "./Components/Body/Cards/BSCards";
import { productData, responsive } from "./Components/Body/Cards/data";
import TDCards from "./Components/Body/Cards/TDCards";
import { productData2} from "./Components/Body/Cards/TDdata";
import ADCards from "./Components/Body/Cards/ADCards";
import { AdData} from "./Components/Body/Cards/ADdata";
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Grid,Box } from '@mui/material';
import ProductCard from './Components/Body/Cards/productCards/productCard';
import MainCatCont from './Components/Body/productsWithCat/mainContainer';
import ProductModal from './Components/Modals/productModal';
import  { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import ScrollSpy from "react-ui-scrollspy";
import styled from 'styled-components';



export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // Set overflow: hidden when opening the modal
    document.body.style.overflow = 'hidden';
    document.getElementById('modalBack').style.display = "flex";
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Reset overflow to its default value when closing the modal
    document.body.style.overflow = 'auto';
    document.getElementById('modalBack').style.display = "none";
    setIsModalOpen(false);
  };


  const [isSticky, setIsSticky] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);


  const handleScroll3 = () => {
    if (window.scrollY > 500) {
      setIsSticky(true);
      console.log('workinggggg');
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll3);
    return () => {
      window.removeEventListener('scroll', handleScroll3);
    };
  }, []);
  
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const tdproduct = productData2.map((item) => (
    
     <TDCards
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  
   
  ));

  const emproduct = productData3.map((item) => (
    <EMCardsupdate
      url={item.imageurl}  
      name={item.name}
    />
  ));

  const adproduct =
 
   AdData.map((item,index) => (
    <Grid item key={index} xs={6} sm={4} md={6} lg={6}>
      <ADCards
      url={item.imageurl}
    />
    </Grid>
    
  ));

  const handleButton1Click = () => {
    console.log('Delivery Button clicked');
  };

  const handleButton2Click = () => {
    console.log('Pickup Button clicked');
  };

  const handleLoginOnClick = () => {
    console.log('LogIn clicked');
  };

  const ReOrderOnClick = () => {
    console.log('ReOrder Button clicked');
  };

  return (
   <div >
    <div style={{overflow:'hidden !important'}}>
      
      {/* Header "Navbar" Section */}

      <NavBar
        button1Text="DELIVERY"
        button2Text="PICKUP"
        button1OnClick={handleButton1Click}
        button2OnClick={handleButton2Click}
        LoginOnClick={handleLoginOnClick}
      />
      
      {/* Body-Carousel "Deals-Banner" Section */}
      {/* <ProductCard/> */}
      {/* <ProductModal/> */}
  
      <BrowserRouter>
        <Slider />
      </BrowserRouter>

      {/* Button "Re-Order" Section */}
 
         



      {/* <EMCards /> */}

      {/* Product Slider "Explore Menu" Section */}
      
   
      
    <div className='horizontalMarginMainPage'>
         <MainCatCont onClickFunction={()=>{openModal()}} />

        <div className="EMPrdSlider">
        <h1>Explore Menu</h1>
        <div style={{height:"40px"}}></div>
        <Carousel showDots={false} responsive={responsive1}>
          {emproduct}
        </Carousel>
      </div>
                {/* Product Slider "Best Seller" Section */}
      <div style={{height:"60px"}}></div>
      <div className="ProductSlider">
        <h1>Best Sellers</h1>
        <div style={{height:"20px"}}></div>
        {/* <Carousel showDots={true} responsive={responsive}> */}
         <div className='productSlider_sub0'>
           {product}
         </div>
         <div className="productSlider_sub1">
         <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
         </div>
        {/* </Carousel> */}
      </div>

      {/* Product Slider "Top Deals" Section */}
      <div style={{height:"60px"}}></div>
      <div className="TopDeals">
        <h1>Top Deals</h1>
        <div style={{height:"20px"}}></div>
        <div style={{display:'flex'}}>
        {tdproduct}
        </div>
      </div>
      <div style={{height:"60px"}}></div>
      {/* Product Slider "Advertisement" Section */}
      <Grid container columnSpacing={4} >
      {adproduct}
      </Grid>



    </div>

      {/* Footer Section */}
     
      <Footer />
      
    </div>
    <div id='modalBack' style={
      {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', /* semi-transparent overlay */
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:'999',
        padding:'0 aut0'
      }
    }>
      <ProductModal onClickFunction={()=>{
        closeModal()
      }} />
    </div>
   </div>
  );
}


