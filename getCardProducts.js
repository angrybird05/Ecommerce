import { updateCartCount } from "./updateCartCount";

export const getCardProducts = () =>{
    let carProducts = localStorage.getItem('cartProducts');
    if(!carProducts){
        return [];
    }
    carProducts=JSON.parse(carProducts);


       updateCartCount(carProducts);
    


    return carProducts;
}     