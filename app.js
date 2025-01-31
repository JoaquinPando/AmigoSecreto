// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let amigos = [];



//funciones
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == "") {
        alert('Debe ingresar un nombre');
    } else {
        //caputurar el nombre del amigo
        console.log(nombre);
        //añadirlo al array amigos
        amigos.push(nombre);
        //limpiar el input
        document.getElementById('amigo').value = "";
    }

}


