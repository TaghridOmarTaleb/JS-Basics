let yourName = document.querySelector("#name");
let display = document.querySelector("div");

yourName.addEventListener("change", function () {
  display.innerHTML = yourName.value;
});