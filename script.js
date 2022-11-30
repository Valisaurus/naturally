/*ARRAY WITH MP4-VIDEOS */
const videos = [
  {
    name: "kaftan",
    video: "./videos/kaftananimation.512x560.mp4",
  },
  {
    name: "slippers",
    video: "./videos/Slipper_Anim_512x344.mp4",
  },
];
/* CALLING FOR THE IMAGES AND THEN ADDING A VIDEO WHEN CLICKING ON THE IMAGE */
// const kaftanDiv = document.querySelector(".kaftan");
// const video = document.querySelector("kaftan-video");

// kaftanDiv.addEventListener("click", () => {
//   video.classList.toggle("active");
// });

// kaftanDiv.addEventListener("click", () => {
//   kaftanVideo.classList.remove("active");
// });

// const kaftanDiv = document.querySelector(".kaftan");
// const imgKaftan = document.getElementById("kaftan-img");

// const addVideo = () => {
//   const video = document.createElement("video");
//   video.src = videos[0].video;
// };
// const addedVideo = addVideo();

// imgKaftan.addEventListener("click", () => {
//   imgKaftan.addedVideo = addedVideo;
// });

// const slippersImg = document.querySelector(".slippers");
// const kaftanImg = document.querySelector(".kaftan-img");
// const kaftanDiv = document.querySelector(".kaftan");

// kaftanImg.addEventListener("click", () => {
//   // const video = document.createElement("video");
//   // video.src = videos[0].video;
//   // video.controls = true;
//   // video.muted = false;
//   // video.height = 240;
//   // video.width = 320;
//   // toggle = !toggle;
//   // if (toggle) {
//   kaftanDiv.innerHTML = `<video width="100%" height="100%" autoplay="autoplay" loop>
//     <source src="./videos/kaftananimation.512x560.mp4" type="video/mp4" />
//     </video> <p>GINKGO KAFTAN</p>`;
//   // }

//   kaftanImg.classList.remove("active");

//   kaftanImg.classList.toggle("active");
// });

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
