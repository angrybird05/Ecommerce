import { getCardProducts } from "./getCardProducts";
import { showTost } from "./showTost";
import { updateCartTotalSum } from "./store/updateCartTotalSum";
import { updateCartCount } from "./updateCartCount";



export const  removeFomCard =(id)=>{

        let cardProducts = getCardProducts();
        cardProducts = cardProducts.filter((currPod)=>currPod.id !==id );
    localStorage.setItem("cartProducts", JSON.stringify(cardProducts));
   let removeDiv = document.getElementById(`card${id}`);
    removeDiv.remove();

    showTost("remove", id);

    updateCartCount(cardProducts);
    updateCartTotalSum();
}