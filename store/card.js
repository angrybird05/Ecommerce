import mobiles from  "./api/mobiles.json";
import laptops from  "./api/laptop.json";
import headphones from  "./api/headphones.json";
import watches from  "./api/watches.json";
import tablets from  "./api/tablets.json";
import { getCardProducts } from "../getCardProducts";
import { fetchLsData } from "./fetchLsData";
import { removeFomCard } from "../removeFomCard";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartTotalSum } from "./updateCartTotalSum";

let cartProducts = getCardProducts();
 



let filterProducts = mobiles.filter((currProduct) => {

return cartProducts.some((currElem) => currElem.id === currProduct.id);

});
let filterProduct = laptops.filter((currProduct) => {

return cartProducts.some((currElem) => currElem.id === currProduct.id);

}); 

let filterPro = headphones.filter((currProduct) => {

return cartProducts.some((currElem) => currElem.id === currProduct.id); 
});
let filterProd = watches.filter((currProduct) => {

return cartProducts.some((currElem) => currElem.id === currProduct.id); 
});
let filterPr = tablets.filter((currProduct) => {

return cartProducts.some((currElem) => currElem.id === currProduct.id); 
});



const finalProducts = [...filterProducts,...filterProduct,...filterPro,...filterProd,...filterPr]; ;
// console.log(finalProducts);

const cartElement = document.querySelector('.cart-items');
const templateContainer = document.querySelector('.productContainer');



const displayProducts= () => {
    finalProducts.forEach((currPod) => {
        const { id, title, price, image, stock, } = currPod;

        let productCard = document.importNode(templateContainer.content, true);


          const lsData = fetchLsData(id,price)


        productCard.querySelector('.item-image').src = image;
        productCard.querySelector('.item-title').textContent = title;
        productCard.querySelector(".productQuantity").textContent = lsData.quantity;
        productCard.querySelector(".item-price").textContent = `$ ${lsData.price}`;


        productCard.querySelector('.quantity-selector').addEventListener('click', (event) => {
        
        
        incrementDecrement(event, id, stock,price);
        
        
        
        });


        productCard.querySelector('.remove-btn').addEventListener('click', (event) => {
             removeFomCard(id);
           }
           );

            productCard.querySelector('#cardValue').id = `card${id}`;
   
        cartElement.appendChild(productCard);


});
}


displayProducts()

updateCartTotalSum();