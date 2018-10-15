// 1
const targetSelector = document.querySelector(".article__header").textContent = "Welcome to Dillon's Blog";

// 2....This had me stumped for a while; just remember when you use querySelectorAll it puts the content into an array, therefore, you have to use a for loop to cycle through that array and add/remove classes or do whatever it is you want to do.
const targetSelector2 = document.querySelectorAll(".article__header");

for (let i = 0; i < targetSelector2.length; i++) {
  targetSelector2[i].classList.add("important")
}

// 3
const removeDashed = document.querySelector(".dashed")
removeDashed.classList.remove("dashed");

// 4
const addGoldenrod = document.querySelector(".article__footer");
addGoldenrod.classList.add("goldenrod");

// p.s I hate the DOM so far..looking forward to primarily utilizing HTML lol