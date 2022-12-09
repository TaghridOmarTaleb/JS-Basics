let button = document.querySelector("button");
let input1 = document.getElementById("name");
let input2 = document.getElementById("surname");
let input3 = document.getElementById("city");

button.addEventListener("click", function () {
  if (confirm("Are you sure you want to reset")) {
    input1.value = "";
    input2.value = "";
    input3.value = "";
  } else {
    console.log("canceled");
  }
})