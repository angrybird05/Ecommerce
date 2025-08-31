export const showTost = (action, id) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    if(action === "add") {
        toast.textContent = "Product added to cart!";
    }else if(action === "remove") {
        toast.textContent = " Product removed from cart!";
    }
    toast.style.position = 'fixed';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}