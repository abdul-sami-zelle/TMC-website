import React from 'react';
import CartInPage from './cartInPage';
import ProductCard from '../Cards/productCards/productCard';
import  { useState, useRef, useEffect } from 'react';
import ScrollSpy from "react-ui-scrollspy";
import styled from 'styled-components';
import EMCardsupdate from '../Cards/Emcardsupdate';
import { productData3 } from '../Cards/EMdata';
import Product from '../Cards/BSCards';
import { productData } from '../Cards/data';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from '../../../config/env';

const product = productData.map((item) => (
  <Product
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
  />
));



const YellowNavbar = styled.nav`
  background-color: red; /* Background color of the yellow navbar */
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 70px; /* Height of your non-sticky navbar */
`;

const NavbarContainer = styled.div`
  position: ${(props) => (props.isSticky ? 'fixed !important' : 'static !important')};
  top: ${(props) => (props.isSticky ? '200px !important' : 'auto')}; /* Height of your non-sticky navbar */
  width: 100%;
  display: flex;
  justify-content: center; /* Align items horizontally at the center */
  background-color: ${(props) => (props.isSticky ? 'lightblue' : 'inherit')}; /* Retain background color when sticky */
  z-index: 99999999; /* Set a higher z-index value */
`;

const emproduct = productData3.map((item) => (
  <EMCardsupdate
    url={item.imageurl}  
    name={item.name}
  />
));


export default function MainCatCont({onClickFunction}) {

    const containerRef = useRef(null);
  const [isTabsFixed, setIsTabsFixed] = useState(false);
  const dispatch = useDispatch();
  const [innerContainerHeight, setInnerContainerHeight] = useState(() => {
    // Retrieve the stored height from local storage, or default to 1
    const storedHeight = localStorage.getItem('innerContainerHeight');
    return storedHeight ? parseInt(storedHeight, 10) : 1;
  });

  useEffect(() => {
    const updateContainerHeight = () => {
      const containerHeight = containerRef.current.getBoundingClientRect().height;
      console.log('Container Height:', containerHeight);
      setInnerContainerHeight(containerHeight);

      // Store the height in local storage
      localStorage.setItem('innerContainerHeight', containerHeight.toString());
    };

    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);

    return () => {
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 800 && scrollPosition < (innerContainerHeight +300)) {
      console.log("abc");
      setIsTabsFixed(true);
    } else {
      setIsTabsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [isSticky, setIsSticky] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);


  const handleScroll3 = () => {
    if (window.scrollY > 800) {
      setIsSticky(true);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [count, setCount] = useState(1);

  
  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };



  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: productData['id'],
        imageurl: productData['imageUrl'],
        name: productData['name'],
        price: productData['price'],
        quantity: count,
      })
    );
  };
















  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll2 = () => {
      const sections = document.querySelectorAll('.section');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll2);

    return () => {
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  const handleButtonClick = (sectionId) => {
    console.log(`Button clicked for: ${sectionId}`);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <div>



        
            
 <div className={`topMenuBar ${isSticky ? "fixed" : ""}`}>
 <ScrollSpy 
       
        onUpdate={handleButtonClick}
      >
       
       <div style={{display:'flex',}} className={`${isTabsFixed ? "fixed2" : ""}`}>
        {
          productData3.map((item) => (
            <div onClick={() => handleButtonClick(item.uid)} >
              <EMCardsupdate
              url={item.imageurl}  
              name={item.name}
              active={activeSection === item.uid ? 'yes' : 'no'}
            />
            </div>
          ))
        }
       </div>
      </ScrollSpy>
</div>

        <div className="mainCont">
        
            <div className="leftSideProducts">
            
            <div ref={containerRef} className="productsCategoried">
              <div  id="edv" className={`section ${isSticky ? "distance123" : ""}`} ></div>
              <h1 className='' >First Category</h1>
              <div className="insideProductsWithHeading">
              
              {/* <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} /> */}
              {productData.map((item,index) => (
  <div onClick={()=>{
    setProductData(item.name,item.imageurl,item.price,index);
    onClickFunction();} }>
    <Product
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
  />
  </div>
))}
              </div>
              <div  id="acc" className={`section ${isSticky ? "distance123" : ""}`} ></div>
              <h1 className=''>Second Category</h1>
              <div className="insideProductsWithHeading">
              
              <ProductCard onClickFunction={()=>{
                setProductData("abc","def");
                onClickFunction();} } />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              </div>
              <div id="pm" className={`section ${isSticky ? "distance123" : ""}`} ></div>
              <h1 className=''>Third Category</h1>
              <div className="insideProductsWithHeading">
              
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              <ProductCard onClickFunction={()=>{onClickFunction()}} />
              </div>
            </div>
                
            </div>
           
            <div  className={`rightSideCart ${isTabsFixed ? "fixed" : ""}`}>
                <CartInPage/>
            </div>
          
        </div>
      </div>
    );
  }