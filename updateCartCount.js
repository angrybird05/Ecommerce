
const cartValue = document.querySelector('.cart-btn');


 export const updateCartCount = (cartProducts) => {

   return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>` );


}