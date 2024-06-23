/*BLOQUE LLENAR TABLA*/ 

async function ObtenerDatos(){
   const url='https://66772ee7145714a1bd740614.mockapi.io/api/Build';
   const tabla= document.querySelector("#body")
   tabla.innerHTML="";
     try{
        let respuesta= await fetch(url);
        let json= await respuesta.json();
        console.log(json);
        agregarFilas(json)
    }catch(error){
        console.log(error);
    }
}

function agregarFilas(data){
    const tabla= document.querySelector("#body")

    for (const build of data) {
        tabla.innerHTML+=   `<tr>
                                <td>${build.nombre}</td>
                                <td>${build.numero}</td>
                                <td>${build.ubicacion}</td>
                            </tr>`;
    }
}

ObtenerDatos();

/*BLOQUE AGREGAR*/ 

let formAgregar=document.querySelector("#form-agregar");

formAgregar.addEventListener("submit", agregar);


async function agregar(e){
        e.preventDefault()
        let formData= new FormData(formAgregar);
        let nombre=formData.get("nombre-input");
        let numero=formData.get("nivel-input");
        let ubicacion=formData.get("lugar-input");
        const url='https://66772ee7145714a1bd740614.mockapi.io/api/Build';
        let item={
            "nombre": nombre,
            "numero": numero,
            "ubicacion": ubicacion
        }

        try {
            let res= await fetch(url, {
                "method": "POST",
                "headers": {"Content-type": "application/json"},
                "body": JSON.stringify(item)
            });
            if (res === 201){
                agregarFilas(item)
                console.log("se pudio")
            }
        } catch (error) {
            console.log(error)
        }

}



