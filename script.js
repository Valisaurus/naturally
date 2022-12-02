//VIDEO ANIMATION

const videoKaftan = document.querySelector(".kaftan video");
const videoSrcKaftan = document.querySelector(".kaftan video source");

const videoSlipper = document.querySelector(".slippers video");
const videoSrcSlipper = document.querySelector(".slippers video source");

const loadVideoKaftan = () => {
  if (window.innerWidth < 600) {
    videoSrcKaftan.src = "./videos/kaftananimation.512x560.mp4";
  } else {
    videoSrcKaftan.src = "./videos/kaftan.animation.1248x1376.mp4";
  }
  videoKaftan.load();
};

loadVideoKaftan();

videoKaftan.addEventListener("click", () => {
  videoKaftan.play();
});

const loadVideoSlipper = () => {
  if (window.innerWidth < 600) {
    videoSrcSlipper.src = "./videos/Slipper_Anim_512x344.mp4";
  } else {
    videoSrcSlipper.src = "./videos/Slipper_anim_ny_700x448.mp4";
  }
  videoSlipper.load();
};
loadVideoSlipper();

videoSlipper.addEventListener("click", () => {
  videoSlipper.play();
});

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

/*END OF FETCHED PART */

/* SEARCHBAR */

const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".nav-item-search");
const exitButton = document.querySelector(".exit-button");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");
  exitButton.classList.toggle("active");
  searchIcon.classList.toggle("hidden");
});
exitButton.addEventListener("click", () => {
  searchBar.classList.remove("active");
  exitButton.classList.remove("active");
  searchIcon.classList.remove("hidden");
});

/* IMAGE ANIMATION  */

// FETCHED FROM https://alvarotrigo.com/blog/css-animations-scroll/ AND MODIFIED BY ANNA

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
