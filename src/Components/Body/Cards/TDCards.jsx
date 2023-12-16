import React from "react";


export default function TDCards(props) {
  return (
    <div className="card-container">
    <div className="td_card"> 
      <img className="product-image" src={props.url} alt="productimage" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p className="price1">{props.price}</p> 
       <p>
        <button>+ Add to bucket</button>
      </p>
    </div>
    </div>
  );
}