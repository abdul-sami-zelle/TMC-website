import React from "react";
import ThreeSquares from "../../subComponents/threeSquares";

export default function Product(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p className="flag">{props.price}</p>
      <img className="product--image" src={props.url} alt="product image" />
      <div className="three_dots_section">
        <ThreeSquares/>
      </div>
    </div>
  );
}