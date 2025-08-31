import { getCardProducts } from "../getCardProducts";

export const updateCartTotalSum = () => {

   let productSubTotal = document.querySelector('.subTotal')
   let productTotal = document.querySelector('.total')
   let shippingTax = document.querySelector('.shippingTax')
   let Tax = document.querySelector('.Tax')

let cartProducts = getCardProducts();
 let initialValue = 0;    
let subSum = cartProducts.reduce((accumulator, currentProduct) => {
  let productPrice = parseInt(currentProduct.price)|| 0;
    return accumulator + productPrice;

},initialValue); 
// console.log(subSum);


Tax = subSum * 0.08; // Assuming a tax rate of 8%
shippingTax = 14; // Assuming a fixed shipping cost of $14
if (subSum === 0) {
    Tax = 0;
    shippingTax = 0;
}

productSubTotal.textContent = `$ ${subSum.toFixed(2)}`;
productTotal.textContent = `$ ${subSum+Tax+shippingTax}`; // Assuming fixed shipping and tax values

}
