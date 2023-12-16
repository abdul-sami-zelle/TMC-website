import productImage1 from '../../Images/ED_Pic1.png';
import productImage2 from "../../Images/ED_Pic2.png";
import productImage3 from "../../Images/ED_Pic3.png";
import productImage4 from "../../Images/ED_Pic4.png";
import productImage5 from "../../Images/ED_Pic5.png";
import productImage6 from "../../Images/ED_Pic6.png";
import productImage7 from "../../Images/ED_Pic7.png";

export const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

export const productData3 = [
  {
    id: 1,
    imageurl: productImage1, // `url("https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png")`
    name: "Every day value",
  },
  {
    id: 2,
    imageurl: productImage2,
    name: "Ala-Carte-&-Combos",
    },
  {
    id: 3,
    imageurl: productImage3,
    name: "Promotion",
    },
  {
    id: 4,
    imageurl: productImage4,
    name: "Signature-Boxes",
    },
  {
    id: 5,
    imageurl: productImage5,
    name: "Sharing",
    },
  {
    id: 6,
    imageurl: productImage6,
    name: "Snakes-&-Beverages",
    },
  {
    id: 7,
    imageurl: productImage7,
    name: "Midnight (Start at 12 am)",
    },
];