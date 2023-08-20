let middleNav = document.querySelector(".middle-nav");
let openBar = document.querySelector(".bar-img");
let close = document.querySelector(".cancel");

openBar.addEventListener("click", () => {
  middleNav.style.maxHeight = "20rem";
});
close.addEventListener("click", () => {
  middleNav.style.maxHeight = "0%";
});

let bigImage = document.querySelector(".big-image");
let smallImage = document.querySelectorAll(".small-images");

smallImage.forEach((small) => {
  small.addEventListener("click", () => {
    //here we loop through the whole images using forEach loop
    //we then add eventListener to each of the image
    bigImage.src = small.src;
  });
});

let successContainer = document.querySelector(".success-con");
let button = document.getElementById("btn");

function hideContainer() {
  setTimeout(() => {
    successContainer.style.display = "none";
  }, 3000);
}
button.addEventListener("click", () => {
  successContainer.style.display = "block";
  hideContainer();
});
