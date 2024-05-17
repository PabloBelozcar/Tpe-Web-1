const contenido = document.getElementById("captcha");

let pin1 = Math.floor((Math.random()*8)+1);
let pin2 = Math.floor((Math.random()*8)+1);
let pin3 = Math.floor((Math.random()*8)+1);
let pin4 = Math.floor((Math.random()*8)+1);



console.log(pin1,pin2,pin3,pin4);

contenido.innerHTML = "su pin es:" +" " + pin1 +" "+ pin2 +" "+ pin3 +" "+ pin4;

const B= document.getElementById("A");
B.innerHTML= "<p>Ingrese su Pin<input type=number id=texto oninput=resultado()></input></p>"

function resultado(){
    let contenedor = document.getElementById("texto");
    let guardar =  contenedor.value;
    console.log(guardar);
}
let contenedor = document.getElementById("texto").value;
let num= parseInt (contenedor);

const btn = document.getElementById("boton");
btn.addEventListener("click", comprobar);



function comprobar(){
    if(num==pin1 && pin2 && pin3 && pin4)
        alert("su pin es correcto");
    else
        alert("su pin es incorrecto");
}
