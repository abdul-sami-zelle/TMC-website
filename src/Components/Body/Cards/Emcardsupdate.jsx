

import React from "react";
import '../styles.css'

export default function EMCardsupdate(props) {
  return (
    <div className="mainEMContainer">
            <div className="squareEM"></div>
            <div className="circleEM">
               <img className="prdimg" src={props.url} alt="productimage" />
                <div className="centent1">
                   <h6>{props.name} </h6>
                   <div className="barEM"></div>
                </div>
                
            </div>
            
            <div className="smallCircleEM"></div>
        
    </div> );
}




