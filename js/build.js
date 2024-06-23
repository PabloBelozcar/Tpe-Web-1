async function ObtenerDatos(){
   const url='https://66772ee7145714a1bd740614.mockapi.io/api/Build';
   const tabla= document.querySelector("#espacioVacio")
   tabla.innerHTML="";
     try{
        let respuesta= await fetch(url);
        let json= await respuesta.json();
        console.log(json);
        for (const build of json) {
            tabla.innerHTML+=`<tr><td>${build.nombre}</td><td>${build.numero}</td><td>${build.ubicacion}</td><td><button>borrar</button></td><td><button>editar</button></td></tr>`;
        }
    }catch(error){
        console.log(error);
    }
}

ObtenerDatos();