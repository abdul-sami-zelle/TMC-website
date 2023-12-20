

import React from "react";
import '../styles.css'

export default function EMCardsupdate(props) {
  return (
    <div className="mainEMContainer">
            <div className={` ${props.active === 'yes' ? 'squareEM_active' : 'squareEM'}`}></div>
            <div className={` ${props.active === 'yes' ? 'circleEM_active' : 'circleEM'}`}>
               <img className="prdimg" src={props.url} alt="productimage" />
                <div className="centent1">
                   <h6>{props.name} </h6>
                   <div className={` ${props.active === 'yes' ? 'barEM_active' : 'barEM'}`}></div>
                </div>
                
            </div>
            
            <div className="smallCircleEM"></div>
        
    </div> );
}




