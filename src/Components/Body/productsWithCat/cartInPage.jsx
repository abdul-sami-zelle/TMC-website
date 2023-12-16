import React from 'react';
import ThreeSquares from '../../subComponents/threeSquares';


export default function CartInPage() {
    return (
      <>
        <div className="cartInPage">
            <h3>
                0 Items Added
            </h3>

            <div className="dviderCartInPage">

            </div>
            <div className="threeSqCartInPage">
                <ThreeSquares/>
            </div>

            <div className="blankCartContent">
                <img src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png" alt="" srcset="" />
                <h4>
                  You haven’t added any items in bucket yet
                </h4>
            </div>
            
        </div>
        <div className="mainCardInPageBtn">
        <div className="cartButtonInPage">
            <div className="cartBtnIPleft">
                <h4>
                    0 Items 
                </h4>
                <h3>
                    | Rs 0
                </h3>
            </div>
            <div className="cartBtnIPright">
                <h4>
                    See Cart
                </h4>
                <div className="forwardIcon">
                    <img src="https://cdn-icons-png.flaticon.com/128/5343/5343102.png" alt="" srcset="" />
                </div>
            </div>
        </div>
        </div>
        <div className="squareCartButtonInPage">

        </div>
      </>
    );
  }