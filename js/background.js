const images = [
  "/img/reze.jpeg",
  "/img/frieren.jpeg",
  "/img/gojo.jpg",
  "/img/AOT.jpg",
  "/img/asilentvoice.jpg"
];

let index = 0;
let showingFirst = true;

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

// preload images (prevents flicker)
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// set initial background
bg1.style.backgroundImage = `url("${images[0]}")`;

function changeBackground() {
  index = (index + 1) % images.length;

  const nextImage = images[index];

  if (showingFirst) {
    bg2.style.backgroundImage = `url("${nextImage}")`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `url("${nextImage}")`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingFirst = !showingFirst;
}

setInterval(changeBackground, 5000);