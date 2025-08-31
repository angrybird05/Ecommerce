import { getCardProducts } from "./getCardProducts";
import { showTost } from "./showTost";
import { updateCartCount } from "./updateCartCount";

getCardProducts();

export const addToCard = (event, id, stock) => {



let localProducts = getCardProducts();


const currProduct = document.querySelector(`#card${id}`);
// console.log(currProduct);


let quantity = currProduct.querySelector('.quantitySelected').textContent;
// console.log(quantity);


let price = currProduct.querySelector('.product-price').textContent;
// console.log(price);

price = price.replace('₹', '');



let existingProduct = localProducts.find((currPod) => currPod.id === id);

// console.log(existingProduct);


 if (existingProduct && quantity>1) {
     
     quantity = Number(existingProduct.quantity)+Number(quantity);
     
   price = Number(quantity*price);
   
   let updatedProduct = {id, quantity, price};
   
   let  updateCart = localProducts = localProducts.map((currPod) => {
       return currPod.id === id ? updatedProduct: currPod;
    });
    
    
    
  console.log(updateCart);
  localStorage.setItem('cartProducts', JSON.stringify(updateCart));

  // showTost("add", id);
  
}


if (existingProduct) {
    // alert('Product already in cart');
    // showTost("add", id);
    return false;
};
price = quantity*price;
quantity=Number(quantity);
price=Number(price);    



// console.log(price);

let updatedProduct = {id, quantity, price};

localProducts.push(updatedProduct);
localStorage.setItem('cartProducts', JSON.stringify(localProducts));



   updateCartCount(localProducts);




}
