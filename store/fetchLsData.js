import { getCardProducts } from "../getCardProducts";

export const  fetchLsData = (id,price)=>{

    let cardProducts = getCardProducts();
    let existingProduct = cardProducts.find((currPod)=>currPod.id===id);
    let quantity=1;
    if(existingProduct){
        quantity= existingProduct.quantity
        price = existingProduct.price
    }
    return{quantity,price}

             
}