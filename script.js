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

// FETCHED FROM https://www.youtube.com/watch?v=ydeQbbF9jbw AND MODIFIED BY VALI

<<<<<<< HEAD
// const kaftanImg = document.querySelector(".kaftan-img");
// let toggle = true;
// kaftanImg.addEventListener("click", () => {
//   toggle = !toggle;
//   if (toggle) {
//     kaftanImg.src = "./images/kaftanbild.640x688.png";
//   } else {
//     kaftanImg.src = "./gifs/kaftananimation.640x688.gif";
//   }
// });

// const slipperImg = document.querySelector(".slipper-img");

=======
/* KAFTAN TOGGLE */
const kaftanImg = document.querySelector(".kaftan-img");
const kaftanGif = document.querySelector(".kaftan-gif");


  kaftanImg.addEventListener("click", () => {
    kaftanImg.classList.toggle("hidden");
    kaftanGif.classList.toggle("active");
  });

  kaftanGif.addEventListener("click", () => {
    kaftanImg.classList.remove("hidden");
    kaftanGif.classList.remove("active");
  });

/* SLIPPER TOGGLE */
const slipperImg = document.querySelector(".slipper-img");
const slipperGif = document.querySelector(".slipper-gif");


  slipperImg.addEventListener("click", () => {
    slipperImg.classList.toggle("hidden");
    slipperGif.classList.toggle("active");
  });

  slipperGif.addEventListener("click", () => {
    slipperImg.classList.remove("hidden");
    slipperGif.classList.remove("active");
  });

// const kaftanImg = document.querySelector(".kaftan-img");
// let toggle = true;
// kaftanImg.addEventListener("click", () => {
//   toggle = !toggle;
//   if (toggle) {
//     kaftanImg.src = "./images/kaftanbild.640x688.png";
//   } else {
//     kaftanImg.src = "./gifs/kaftananimation.640x688.gif";
//   }
// });

// const slipperImg = document.querySelector(".slipper-img");

>>>>>>> 82fdaa2f3166bed290bf36b3a9b9c2c3bb4fbd37
// slipperImg.addEventListener("click", () => {
//   toggle = !toggle;
//   if (toggle) {
//     slipperImg.src = "./images/Slipper_Final_640x432.jpg";
//   } else {
//     slipperImg.src = "./gifs/Slipper_Anim_640x432.gif";
//   }
// });
<<<<<<< HEAD

const videoKaftan = document.querySelector(".kaftan video");
const videoSrcKaftan = document.querySelector(".kaftan video source");

const videoSlipper = document.querySelector(".slippers video");
const videoSrcSlipper = document.querySelector(".slippers video source");

const loadVideoKaftan = () => {
  if (window.innerWidth < 700) {
    videoSrcKaftan.src = "./videos/kaftananimation.512x560.mp4";
  } else {
    videoSrcKaftan.src = "./videos/kaftananimation.640x688 (1).mp4";
  }
  videoKaftan.load();
  videoKaftan.play();
};
loadVideoKaftan();
videoKaftan.addEventListener("click", loadVideoKaftan);

const loadVideoSlipper = () => {
  if (window.innerWidth < 700) {
    videoSrcSlipper.src = "./videos/Slipper_Anim_512x344.mp4";
  } else {
    videoSrcSlipper.src = "./videos/Slipper_anim_ny_700x448.mp4";
  }
  videoSlipper.load();
  videoSlipper.play();
};
videoSlipper.addEventListener("click", loadVideoSlipper);

// videoSlipper.addEventListener("mouseleave", loadVideoSlipper, () => {});
// videoSlipper.addEventListener("mouseleave", videoSrcSlipper.pause());

// window.addEventListener("resize", loadVideoKaftan);
// window.addEventListener("resize", loadVideoSlipper);
=======
>>>>>>> 82fdaa2f3166bed290bf36b3a9b9c2c3bb4fbd37

// const kaftanDiv = document.querySelector(".kaftan");

// const kaftanImg = document.querySelector(".kaftan-img");
// const kaftanGif = document.querySelector(".kaftan-gif");

// kaftanDiv.addEventListener("click", () => {
//   kaftanGif.classList.toggle("active");
//   kaftanImg.classList.remove("active");
// });

// kaftanGif.addEventListener("click", () => {
//   kaftanGif.classList.remove("active");
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
