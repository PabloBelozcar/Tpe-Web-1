async function ObtenerDatos(){
   const url='https://66772ee7145714a1bd740614.mockapi.io/api/Build';
   const tabla= document.querySelector("#espacioVacio")
   tabla.innerHTML="";
     try{
        let respuesta= await fetch(url);
        let json= await respuesta.json();
        console.log(json);
        for (const build of json) {
            tabla.innerHTML+=`<td>${build.nombre}</td>`;
            tabla.innerHTML+=`<td>${build.numero}</td>`;
            tabla.innerHTML+=`<td>${build.ubicacion}</td>`;
        }
    }catch(error){
        console.log(error);
    }
}

ObtenerDatos();