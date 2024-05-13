
const getProductInfo = (target) => {

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

    // active button purchase
    const purchBtn = document.getElementById("purchase-btn");

    if (sumTotalPrice > 0) {
        purchBtn.removeAttribute("disabled");
    }
    else {
        purchBtn.setAttribute("disabled", true);
    }


    //active  apply button

    const applyBtn = document.getElementById("apply-btn");

    if (sumTotalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
    else {
        applyBtn.setAttribute("disabled", true)
    }

    // appaly Promo Code

    applyBtn.addEventListener("click", function () {

        const applyField = document.getElementById("promo-code");
        const promoValue = applyField.value;
        const discountValue = document.getElementById("discount-show");
        const finalTotal = document.getElementById("final-total");


        if (promoValue === "SELL200") {


            const discount = (sumTotalPrice / 100) * 20;
            const fieldDiscount = discount.toFixed(2);
            discountValue.innerHTML = fieldDiscount;
            const grandTotal = sumTotalPrice - discount;
            finalTotal.innerText = grandTotal.toFixed(2);

            applyField.value = '';

        }
        else {
            alert("Wrong Promo Code.");
        }
    });


}


