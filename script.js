/* THIS PART IS FETCH FROM https://www.youtube.com/watch?v=flItyHiDm7E  AND MODIFIED BY VALI */

const hamburgerLines = document.querySelector(".hamburger-lines");

const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerLines.addEventListener("click", () => {
  hamburgerLines.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

document.querySelectorAll(".hamburger-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerLines.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  })
);

/* SEARCHBAR */

// const searchBar = document.querySelector(".search-bar");
// const searchIcon = document.querySelector(".nav-item-search");
// const exitButton = document.querySelector(".exit-button");

// searchIcon.addEventListener("click", () => {
//   searchBar.classList.toggle("active");
// });

/* IMAGE ANIMATION  */


const 
