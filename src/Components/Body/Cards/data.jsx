import productImage1 from '../../Images/BS_Pic1.png';
import productImage2 from "../../Images/BS_Pic2.png";
import productImage3 from "../../Images/BS_Pic3.png";
import productImage4 from "../../Images/BS_Pic4.png";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1374 },
    items: 4,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1374, min: 800 },
    items: 3,
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

export const productData = [
  {
    id: 1,
    imageurl: productImage1,
    name: "krunch burger",
    price: "Rs 270",
    // description: "Some text about the product..",
  },
  {
    id: 2,
    imageurl: productImage2,
    name: "mighty zinger",
    price: "Rs 700",
    // description: "Some text about the product..",
  },
  {
    id: 3,
    imageurl: productImage3,
    name: "hot wings bucket",
    price: "Rs 610",
    // description: "Some text about the product..",
  },
  {
    id: 4,
    imageurl: productImage4,
    name: "krunch combo",
    price: "Rs 520",
    // description: "Some text about the product..",
  },
  // {
  //   id: 5,
  //   imageurl: productImage1,
  //   name: "krunch burger",
  //   price: "Rs 270",
  //   // description: "Some text about the product..",
  // },
  // {
  //   id: 6,
  //   imageurl: productImage2,
  //   name: "mighty zinger",
  //   price: "Rs 700",
  //   // description: "Some text about the product..",
  // },
  // {
  //   id: 7,
  //   imageurl: productImage3,
  //   name: "hot wings bucket",
  //   price: "Rs 610",
  //   // description: "Some text about the product..",
  // },
  // {
  //   id: 8,
  //   imageurl: productImage4,
  //   name: "krunch combo",
  //   price: "Rs 520",
  // }
];

