"use strict"
/*posible error*/
let btn = document.querySelector('#boton');
btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    let abrir = document.querySelector('.barra-navegacion');
    abrir.classList.toggle('open');
}