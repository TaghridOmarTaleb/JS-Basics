

let green = document.querySelector(".green");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let t = document.getElementById("text");

green.onclick = function () {
  t.style.color = "green";
};

red.onclick = function () {
  t.style.color = "red";
};

blue.onclick = function () {
  t.style.color = "blue";
}; 
