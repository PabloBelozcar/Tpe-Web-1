const menuBtnpj = document.querySelector("#btn-menu-pj");
const containerMenupj = document.querySelector("#container")

menuBtnpj.addEventListener("click", function(){
    containerMenupj.classList.toggle("open");
})