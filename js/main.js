const btnAbrir=document.querySelector("#abrir");
const btnCerrar=document.querySelector("#cerrar");
const nav=document.querySelector("#menu-container");

btnAbrir.addEventListener("click", function(){
    nav.classList.add("open")
})

btnCerrar.addEventListener("click", function(){
    nav.classList.remove("open")
})