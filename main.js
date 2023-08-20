let middleNav = document.querySelector(".middle-nav");
let openBar = document.querySelector(".bar-img");
let close = document.querySelector(".cancel");

let decreamentBtn = document.getElementById("decreament");
let increamentBtn = document.getElementById("increament");
let countEl = document.getElementById("count");

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

//below here we create a function of a timeout
// using the setTimeout method with an elapsed time of
// 3000 milli second (i.e 3 seconds)
function hideContainer() {
  setTimeout(() => {
    successContainer.style.display = "none";
  }, 3000);
}
button.addEventListener("click", () => {
  successContainer.style.display = "block";
  hideContainer();
  //here we pass in the timeout function to display the
  // container none
});

let count = 0;

increamentBtn.addEventListener("click", () => {
  count++;
  countEl.innerHTML = count;
});

decreamentBtn.addEventListener("click", () => {
  if (count === 0) {
    decreamentBtn.Disabled = true;
  } else {
    count--;
  }
  countEl.innerHTML = count;
});
