const contenido = document.getElementById("captcha");

let pin1 = Math.floor((Math.random()*8)+1);
let pin2 = Math.floor((Math.random()*8)+1);
let pin3 = Math.floor((Math.random()*8)+1);
let pin4 = Math.floor((Math.random()*8)+1);



console.log(pin1,pin2,pin3,pin4);

contenido.innerHTML = "su pin es:" +" " + pin1 +" "+ pin2 +" "+ pin3 +" "+ pin4;

function resultado(){
    let contenedor = document.getElementById("texto");
    let guardar =  contenedor.value;
    console.log(guardar);
}

function verificar(){
    let btn = document.getElementById("boton");
    btn.addEventListener("click", comprobar);
}

function comprobar(){
    if(contenedor==pin1)
        alert("su pin es correcto");
    else
        alert("su pin es incorrecto");
}
