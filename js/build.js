async function ObtenerDatos(){
   const url='https://66772ee7145714a1bd740614.mockapi.io/api/Build';
   const tabla= document.querySelector("#EspacioVacio")
   tabla.innerHTML="";
   try{
        let respuesta= await fetch(url);
        let json= await respuesta.json();
        console.log(json);
        for (const build of json) {
            let item= build.item;
            tabla.innerHTML+=`<p>${item.nombre}</p>`;
        }
    }catch(error){
        console.log(error);
    }
}

ObtenerDatos();