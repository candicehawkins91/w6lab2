"use strict";  

const bands = [
    { name: "The Beatles", genre: "Rock", yearFormed: 1960, active: false },
    { name: "The Rolling Stones", genre: "Rock", yearFormed: 1962, active: true },
    { name: "The Who", genre: "Rock", yearFormed: 1964, active: true },
];

function render(bandsArray) {
    for (let i = 0; i < bandsArray.length; i++) {
        let active = "";
        const band = bandsArray[i];

        if (band.active) {
            active = "This band is active.";
        } else {
            active = "This band is not active.";
        }

        let card = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${band.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${band.genre}</h6>
    <p class="card-text">${band.yearFormed}</p>
    <p class="card-text">${active}</p>

  </div>
</div>`;
        document.getElementById("main").innerHTML += card;
    }

// I spent an hour trying to figure out why my code was not working. I put render(bands) at the end of the file and it worked. It did not work because I put it here, and that is the wrong spot.
}

render(bands);