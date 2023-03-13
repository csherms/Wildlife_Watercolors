// document.getElementById("img1").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img2").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img3").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img4").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img5").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img6").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img7").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img8").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img9").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img10").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img11").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img12").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img13").addEventListener("click", function () {
//   this.classList.toggle("big");
// });
// document.getElementById("img14").addEventListener("click", function () {
//   this.classList.toggle("big");
// });

function resizeImages() {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      image.classList.toggle("big");
    });
  });
}

resizeImages();
