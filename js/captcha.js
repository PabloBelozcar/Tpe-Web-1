const contenido = document.getElementById("captcha");

let pin1 = Math.floor(1000+(Math.random()*9000));


console.log(pin1);

contenido.innerHTML = "su pin es:" +" " + pin1;

document.getElementById("texto").oninput=resultado()

function resultado(){
    let contenedor = document.getElementById("texto");
    let guardar =  contenedor.value;
    console.log(guardar);
}


const btnVerificar = document.getElementById("boton-verificar");
btnVerificar.addEventListener("click", function(){comprobar(pin1)});



function comprobar(pin1){
    let contenedor = document.getElementById("texto").value;
    let num=parseInt(contenedor);
    if(pin1==num)
        alert("su pin es correcto");
    else
        alert("su pin es incorrecto");
        
}
