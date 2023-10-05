
const getProductInfo =(target)=>{

    // get product name
    const name = target.childNodes[3].childNodes[3].innerText;
    const showProductName = document.getElementById("product-show");
    const procudtLi = document.createElement("li");
    procudtLi.innerText = name;
    showProductName.appendChild(procudtLi);

    // get product price
    const productPriceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPrice = parseFloat(productPriceString);
    
    // sum product
    const getTotalPrice = document.getElementById("total-price");
    const totalPriceString = getTotalPrice.innerText;
    const newTotalPrice = parseFloat(totalPriceString);
    
    // set porduct price for show
    const sumTotalPrice = newTotalPrice + productPrice;
    getTotalPrice.innerText = sumTotalPrice + ".00";

  
    
    



}


