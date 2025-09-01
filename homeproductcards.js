
const productContainer = document.querySelector('.productContainer');
const productTemplate = document.querySelector('.product-template');
   export const showProductCards = (products) => {
   if(!products || products.length === 0) {
       productContainer.innerHTML = '<p>No products available</p>';
       return;
   }
  
   products.forEach((curPod) => {
    const { id, title, price, image, description } = curPod;
    const productCard = document.importNode(productTemplate.content, true);

    
    productCard.querySelector('.product-image').src = image;
    productCard.querySelector('.product-image').alt = title;
    productCard.querySelector('.product-title').textContent = title;
    productCard.querySelector('.product-price').textContent = ` $${price.toFixed(2)}`;
    productCard.querySelector(".product-description").textContent = description; 

    
    productCard.querySelector('#cardValue').id = `card${id}`;
    
    
    const exploreBtn = productCard.querySelector('.product-card');
    const currentCard = productCard.querySelector(`#card${id}`);


    const elementId = currentCard.id;
    
    if (elementId === 'card1') {
        
        exploreBtn.addEventListener('click', () => {
                window.location.href = 'mobiles.html';
            });
        }

         if (elementId === 'card2') {
        
        exploreBtn.addEventListener('click', () => {
                window.location.href = 'laptops.html';
            });
        }
         if (elementId === 'card3') {
        
        exploreBtn.addEventListener('click', () => {
                window.location.href = 'headphones.html';
            });
        }
               

        if (elementId === 'card4') {
        
        exploreBtn.addEventListener('click', () => {
                window.location.href = 'watch.html';
            });
        }
        if (elementId === 'card5') {
        
        exploreBtn.addEventListener('click', () => {
                window.location.href = 'tablets.html';
            });
        }

        // exploreBtn.addEventListener('click', () => {
            
        //     console.log(currentCard);
        //     console.log(elementId);
        //     });

    productContainer.appendChild(productCard);


   });
};
