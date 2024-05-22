const contenido = document.getElementById("captcha");
let pin = codigo();


function codigo(){
    let pin = Math.floor(1000+(Math.random()*9000));
    contenido.innerHTML = "su pin es:" +" " + pin;
    return pin;
}

const btnVerificar = document.getElementById("boton-verificar");
const verificado = document.querySelector("#check");

btnVerificar.addEventListener("click", comprobar);


function comprobar(){
    let contenedor = document.getElementById("texto").value;
    let num=parseInt(contenedor);
    if(pin==num){
        btnVerificar.classList.add("ocultar-boton")
        verificado.innerHTML = "\u2705"}
    else{
        pin=codigo();
        contenido.innerHTML= "Su pin es incorrecto, su nuevo pin es:"+" "+ pin;
    }
}
