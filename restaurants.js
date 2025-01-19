"use strict";

const restaurant = [
  {
    name: "The Cottage",
    cuisine: "comfort food",
    location: "Alexandria",
    rating: 4.5,
  },
  {
    name: "Pamela's",
    cuisine: "soul food",
    location: "Alexandria",
    rating: 4.6,
  },
  { name: "Buckets", cuisine: "sea food", location: "Pineville", rating: 4.4 },
];

function render(restaurantArray) {
  for (let i = 0; i < restaurantArray.length; i++) {
    const restaurant = restaurantArray[i];

    let card = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${restaurant.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${restaurant.cuisine}</h6>
    <p class="card-text">${restaurant.location}</p>
    <p class="card-text">${restaurant.rating}</p>

  </div>
</div>`;
    document.getElementById("main").innerHTML += card;
  }
}

render(restaurant);
