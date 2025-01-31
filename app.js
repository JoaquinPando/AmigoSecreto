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
        //mostrar la lista de amigos
        agregarAmigoLista()
    }
}

function limpiarLista() {
    amigos = [];
    agregarAmigoLista();
}
function limpiarResultado() {
    document.getElementById('resultado').innerHTML = "";
}

function agregarAmigoLista() {
    let lista = document.getElementById('listaAmigos'); //aqui se va a mostrar la lista de amigos
    lista.innerHTML = "";//limpiar la lista
    //recorrer el array amigos
    for (let i = 0; i < amigos.length; i++) {
        //crear un elemento li
        let li = document.createElement('li');
        //agregar el nombre del amigo al li
        li.innerHTML = amigos[i];
        //agregar el li a la lista
        lista.appendChild(li);
    }
    
}

function sortearAmigo() {
    limpiarResultado()
    //cromprobar si hay amigos en la lista
    if (amigos.length == 0) {
        alert('No hay amigos en la lista');
        return;
    }
    let ganador = Math.floor(Math.random() * amigos.length); //math.floor redondea el numero y match.random genera un numero aleatorio
    console.log(ganador); //mostrar el numero ganador
    document.getElementById('resultado').innerHTML = amigos[ganador]; //mostrar el nombre del ganador
    limpiarLista(); //limpiar la lista de amigos
}


