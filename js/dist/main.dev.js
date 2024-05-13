"use strict";

var getProductInfo = function getProductInfo(target) {
  // get product name
  var name = target.childNodes[3].childNodes[3].innerText;
  var showProductName = document.getElementById("product-show");
  var procudtLi = document.createElement("li");
  procudtLi.innerText = name;
  showProductName.appendChild(procudtLi); // get product price

  var productPriceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
  var productPrice = parseFloat(productPriceString); // sum product

  var getTotalPrice = document.getElementById("total-price");
  var totalPriceString = getTotalPrice.innerText;
  var newTotalPrice = parseFloat(totalPriceString); // set porduct price for show

  var sumTotalPrice = newTotalPrice + productPrice;
  getTotalPrice.innerText = sumTotalPrice + ".00"; // active button purchase

  var purchBtn = document.getElementById("purchase-btn");

  if (sumTotalPrice > 0) {
    purchBtn.removeAttribute("disabled");
  } else {
    purchBtn.setAttribute("disabled", true);
  } //active  apply button


  var applyBtn = document.getElementById("apply-btn");

  if (sumTotalPrice >= 200) {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", true);
  } // appaly Promo Code


  applyBtn.addEventListener("click", function () {
    var applyField = document.getElementById("promo-code");
    var promoValue = applyField.value;
    var discountValue = document.getElementById("discount-show");
    var finalTotal = document.getElementById("final-total");

    if (promoValue === "SELL200") {
      var discount = sumTotalPrice / 100 * 20;
      var fieldDiscount = discount.toFixed(2);
      discountValue.innerHTML = fieldDiscount;
      var grandTotal = sumTotalPrice - discount;
      finalTotal.innerText = grandTotal.toFixed(2);
      applyField.value = '';
    } else {
      alert("Wrong Promo Code.");
    }
  });
};