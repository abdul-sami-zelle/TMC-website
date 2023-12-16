import React from "react";

export default function ADCards(props) {
  return (
    <div className="main-container">
    <div className="ad_card"> 
      <img className="AdImg" src={props.url} alt="productimage" />
      <h2>{props.name}</h2> 
    </div>
    </div>
  );
}