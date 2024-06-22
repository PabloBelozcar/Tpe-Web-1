let form=document.querySelector("#form");
form.addEventListener("submit", agregar);

function agregar(e){
    e.preventDefault();
    let formData= new FormData(form);
    let email=formData.get("email");
    let usuario=formData.get("usuario");
    let msj=formData.get("msj-usuario");
    console.log(email,usuario,msj);
    }
