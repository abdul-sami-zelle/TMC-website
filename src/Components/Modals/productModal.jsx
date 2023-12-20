import React from "react";
import ThreeSquares from "../subComponents/threeSquares";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, Box } from '@mui/material';
import AllCollapseExample from "./accordian1";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubAddonTab from "./addons";
import  { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../Statemanagment/slices/cartSlice";




export default function ProductModal(props) {

    const [count, setCount] = useState(1);

  
    const incrementCounter = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrementCounter = () => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
      }
    };
    const dispatch = useDispatch();
  
  
    const handleAddToCart = () => {
      dispatch(
        addToCart({
          id: props.id,
          imageurl: props.productImage,
          name: props.productName,
          price: props.productPrice,
          quantity: count,
        })
      );
      
    };




    return (
        <div className="product_modal">
            <div className="three_dots_modal_1">
                <ThreeSquares />
            </div>
            <div onClick={ props.onClickFunction } className="close_Btn_Modal">
                <img src=
             "https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                 alt="" srcset="" />
            </div>
            <div className="categorization_product_modal">
                <div className="left_Side_product_modal">
                    <Accordion className="main_accordian">
                        <Accordion.Item eventKey="0" className="main_accordian_item">
                            <Accordion.Header className="main_accordian_header">
                                <h2>
                                        Choose an option                                
                                </h2>
                            </Accordion.Header>
                            <Accordion.Body className="main_accordian_body">
                            <div className="variationsProductModal">
                                <div className="optionVariPM">
                                  <input type="radio" value="Male" name="gender" /> 
                                  <h3>option 1</h3>
                                </div>
                                <h2>
                                    Rs 1070
                                </h2>
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="main_accordian_item">
                        <Accordion.Header className="main_accordian_header">
                                <h2>
                                        Add a soft drink                              
                                </h2>
                                <div style={{width:"10px"}}></div>
                                <h4>
                                    (optional)
                                </h4>
                            </Accordion.Header>
                            <Accordion.Body className="main_accordian_body">
                            <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="main_accordian_item">
                        <Accordion.Header className="main_accordian_header">
                                <h2>
                                        Add Ons                             
                                </h2>
                                <div style={{width:"10px"}}></div>
                                <h4>
                                    (optional)
                                </h4>
                            </Accordion.Header>
                            <Accordion.Body className="main_accordian_body">
                               <SubAddonTab/>
                               <SubAddonTab/>
                               <SubAddonTab/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="right_Side_product_modal">
                    <div className="product_image_modal">
                        <img src={props.productImage}
                      //  "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png"
                         alt="" srcset="" />
                    </div>
                    <div class="shadow-img"></div>
                    <h2>
                        {props.productName}
                    </h2>
                    <p>
                        Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a sesame seed bun
                    </p>
                    <div className="inc_dec_btn">
                        {/* <Button variant="outlined" href="#outlined-buttons">
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                </Button> */}
                        <Box sx={{ backgroundColor: "transparent", height: '40px', width: '40px', borderRadius: '5px', border: '2px solid #e4002b', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            onClick={() => {
                               count===1?null:decrementCounter();
                             }
                                
                            }>
                            <RemoveIcon sx={{ color: 'white' }} />
                        </Box>
                        <h3>
                            {count}
                        </h3>
                        <Box sx={{ backgroundColor: "transparent", height: '40px', width: '40px', borderRadius: '5px', border: '2px solid #e4002b', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            onClick={() => {
                              
                                incrementCounter();
                             }

                            }>

                            <AddIcon sx={{ color: 'white' }} />
                        </Box>
                    </div>
                    <div onClick={
                        ()=>{
                            handleAddToCart();
                            props.onClickFunction();
                        }
                        } className="add_to_bucket_modal_1">
                        <h4>RS {props.productPrice}</h4>
                        <h3>ADD TO BUCKET</h3>
                        <div className="forwardIcon">
                            <img src="https://cdn-icons-png.flaticon.com/128/5343/5343102.png" alt="" srcset="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}