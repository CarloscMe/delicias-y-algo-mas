const btn = document.getElementById("btn");
const nav = document.querySelector(".nav-bar");

let mostrar = false

btn.addEventListener("click",()=>{
 mostrar = !mostrar
  btn.textContent = mostrar ? "x" : "=";
  nav.style.display = mostrar ? "flex" : "none";
})