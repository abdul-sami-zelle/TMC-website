export const GlobalUrl = "https://turkish-mud-coffee.vercel.app/api/v1";
export var productName = "";
export var productPrice = "";
export var productImage = "";
export var productId = "";

export function setProductData(name, image, price, id) {
     productName = name;
     productImage = image;
     productPrice = price;
     productId = id;
}



