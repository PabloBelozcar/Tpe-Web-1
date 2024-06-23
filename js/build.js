const url='https://66772ee7145714a1bd740614.mockapi.io/api/Build';
/*BLOQUE LLENAR TABLA*/ 

async function ObtenerDatos(){
   const tabla= document.querySelector("#body")
   tabla.innerHTML="";
     try{
        let respuesta= await fetch(url);
        let json= await respuesta.json();
        console.log(json);
        agregarFilas(json);
    }catch(error){
        console.log(error);
    }
}

function agregarFilas(json){
    const tabla= document.querySelector("#body")

    for (const build of json) {
        tabla.innerHTML+=   `<tr>
                                <td>${build.id}</td>
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
            if (res.status === 201){
                ObtenerDatos()
            }
        } catch (error) {
            console.log(error)
        }

}


/*BLOQUE BORRAR*/

let btnBorrar=document.querySelector(".btn-borrar");

btnBorrar.addEventListener("click", borrar)

async function borrar(){
    let idImput=document.getElementById("id-item")
    const id=idImput.value
    try {
        let respuesta= await fetch(url);
        let json= await respuesta.json();
        const itemValido=buscarID(json,id)
        if (itemValido != null){
            let res= await fetch(`${url}/${id}`,{
                "method": "DELETE"
            });
            if (res.status === 200){
                ObtenerDatos()
                document.querySelector("#aviso").innerHTML = "Eliminado!"
            }
        }

    } catch (error) {
        console.log(error)
    }
}


function buscarID(json, id){
    for (const item of json){
        if (item.id === id){
            return item;
        }
    }
    return null;
}




