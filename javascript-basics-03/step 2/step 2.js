let num1 = document.getElementById("show");
let num2 = document.getElementById("hide");
let num3 = document.getElementById("texte")

num1.onclick = function(){
    num3.style.display = "block";
}

num2.onclick = function(){
    num3.style.display = "none";
}