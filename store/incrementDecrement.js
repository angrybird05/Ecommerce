import { getCardProducts } from "../getCardProducts";
import { updateCartTotalSum } from "./updateCartTotalSum";

export const incrementDecrement = (event, id, stock,price)=>{
  
      


   const currentCard = document.querySelector(`#card${id}`);
    // console.log(currentCard);
   const productQuantity = currentCard.querySelector('.productQuantity');
   const priceElement = currentCard.querySelector('.item-price');
   let quantity = 1;
   let localStoragePrice = 0;


   let cartProducts = getCardProducts();
   let existingProduct = cartProducts.find((currPod) => currPod.id === id);


   if (existingProduct) {
       quantity = existingProduct.quantity;
       localStoragePrice = existingProduct.price;
   }else {
       localStoragePrice = price;
       price = price;
   }
     

    if (event.target.className === "incBtn") {
         if (quantity < stock) {
              quantity += 1;
         } else if (quantity === stock) {
              quantity = stock;
              localStoragePrice = stock * price;
         }
    }

    if (event.target.className === "decBtn") {
         if (quantity > 1) {
              quantity -= 1;
         } else if (quantity === 1) {
              quantity = 1;
         }
    }
       localStoragePrice = quantity * price;


       
  let updatedProduct = {id, quantity, price: localStoragePrice};

  let  updateCart = cartProducts.map((currPod) => {
            return currPod.id === id ? updatedProduct: currPod;
        });
    
    
//   console.log(updateCart);
  localStorage.setItem('cartProducts', JSON.stringify(updateCart));

    productQuantity.textContent = quantity;
    priceElement.textContent = `$ ${localStoragePrice}`;



    updateCartTotalSum();

      
}