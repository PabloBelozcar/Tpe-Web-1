const menuBtn= document.querySelector("#btn-menu");
const containerMenu= document.querySelector("#menu-container");

menuBtn.addEventListener("click", function(){
    containerMenu.classList.toggle("open");
})

