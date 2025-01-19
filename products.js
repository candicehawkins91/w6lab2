"use strict";  

const products = [
    { name: "Eggs", category: "poultry", price: 4.53, isStock: false },
    { name: "Milk", category: "dairy", price: 3.96, isStock: true },
    { name: "Flour", category: "baking", price: 2.38, isStock: true },
];

function render(productsArray) {
    for (let i = 0; i < productsArray.length; i++) {
        let isStock = "";
        const products = productsArray[i];

        if (products.isStock) {
            isStock = "This product is in stock.";
        } else {
            isStock = "This product is not in stock.";
        }

        let card = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${products.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${products.category}</h6>
    <p class="card-text">${products.price}</p>
    <p class="card-text">${isStock}</p>

  </div>
</div>`;
        document.getElementById("main").innerHTML += card;
    }
}

render(products);