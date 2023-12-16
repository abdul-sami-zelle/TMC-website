import React from "react";
import './productCard.css'
import heart from "../../../Images/heart.png"
import c1 from "../../../Images/c1.png"

export default function ProductCard({onClickFunction}) {
  return (
    <div className="productCardMain">
        <div className="product_image" onClick={onClickFunction}>
            <img src={c1} alt="" srcset="" />
        </div>
        <div className="product_content">
            <div className="product_name">
                <h5>Product Name</h5>
            </div>
            <div className="product_description">
                <p>
                In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw
                </p>
            </div>
            <div className="product_price">
                <h4>
                    Rs 1222
                </h4>
            </div>

            
        </div>
        <button>+ Add to bucket</button>
        <div className="product_to_fav">
            <img src={heart} alt="" srcset="" />
        </div>
    </div>
  );
}