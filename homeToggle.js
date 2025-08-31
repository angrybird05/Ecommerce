export const homeToggle = (event,id,stock) => {

const currentCard = document.querySelector(`#card${id}`);
// console.log(currentCard);


const productQuantity = currentCard.querySelector('.quantitySelected');

// console.log(productQuantity.innerText);


let quantity =  parseInt(productQuantity.getAttribute("data-quantity"))||1;

if(event.target.className==="incBtn"){
    if(quantity < stock){
        quantity+=1;
    }else  if(quantity === stock){
        quantity== stock;
    }
}

if(event.target.className==="decBtn"){
    if(quantity > 1){
        quantity-=1;
    }else if(quantity === 1){
        quantity = 1;
    }
}

    productQuantity.innerText=quantity;
    productQuantity.setAttribute("data-quantity", quantity);
    // productQuantity.textContent = `quantity: ${quantity}`;

  return quantity;
};

// let price = currElement.querySelector('.product-price').textContent;
// console.log(price);