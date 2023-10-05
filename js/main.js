// const porduct =  document.getElementsByClassName("product-all");

// console.log(porduct)

// porduct.forEach(function(element){
//     element.addEventListener("click", function() {
        
        

//         alert("Button clicked!");
//     });
// })

const getProductInfo =(target)=>{

    const name = target.childNodes[3].childNodes[3].innerText;

    // const x = target.childNodes[3].childNodes[3];
    // console.log(li);

    const showProductName = document.getElementById("product-show");
    const procudtLi = document.createElement("li");
    procudtLi.innerText = name;
    showProductName.appendChild(procudtLi);


}

