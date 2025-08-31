import { addToCard } from "./addToCard";
import { homeToggle } from "./homeToggle";
import { showTost } from "./showTost";






const productContainer = document.querySelector('.product-grid');
const productTemplate = document.querySelector('.product-template');




export const showMobilesCards = (mobiles) => {
   if(!mobiles || mobiles.length === 0) {
       productContainer.innerHTML = 'not available';
       return;
   }

  mobiles.forEach((curPod) => {
    const { id, title, price, image, originalPrice, storage, rating, stock, features, description } = curPod;
    const mobilesCard = document.importNode(productTemplate.content, true);

    mobilesCard.querySelector('.product-image').src = image;
    mobilesCard.querySelector('.product-image').alt = title;
    mobilesCard.querySelector('.product-title').textContent = title;
    mobilesCard.querySelector('.product-price').textContent = ` ₹${price.toFixed(2)}`;
    mobilesCard.querySelector(".product-features").textContent = features;
    mobilesCard.querySelector(".quantity").textContent =`stock: ${stock}`;
    
    
    
    mobilesCard.querySelector('#cardValue').id = `card${id}`;

    mobilesCard.querySelector(".stock").addEventListener('click', (event) => {
      homeToggle(event, id,stock);
    });




    mobilesCard.querySelector('.buy-btn').addEventListener('click', (event) => {
      addToCard(event,id,stock);
      showTost("add", id);
      
    }
    );
    
    
    // const currentCard = mobilesCard.querySelector(`#card${id}`);

      // console.log(currentCard.id); 
      productContainer.appendChild(mobilesCard);
  }
    
);
      



      
        
       
      
    


    






}