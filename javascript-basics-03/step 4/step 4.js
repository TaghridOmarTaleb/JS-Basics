let passw = prompt("Type your password:");
document.getElementById("password").value = passw;
let config = prompt("Confirm your password:");
document.getElementById("confirmation").value = config;

let passInput = document.getElementById("password");
let confInput = document.getElementById("confirmation");

document.querySelector("[name='button']").onclick = function (e) {
  e.preventDefault();
  if (passInput.value == "" && confInput.value == '') {
    password.style.border = "1px solid red";
  } else if (passInput.value == confInput.value) {
    alert("Password Confirmed!");
  } else {
    confirmation.style.border = "1px solid red"
    alert("It doesn't match!");
  }
};