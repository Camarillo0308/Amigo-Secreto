// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables a utilizar
let Amigos = [];
let existe = false;

function agregarAmigo(nombre){
    if(nombre.trim() != ""){
        for(let amigo of Amigos){
            if(amigo == nombre){
                existe = true;
                break;
            }
        }
        if(existe == false){
            Amigos.push(nombre);
            actualizarVista();
        }else{
            alert('Ingresa otro nombre, ese ya existe');
            existe = false;
        }
    }else{
        alert('Por favor, Ingresa un nombre valido');
    }
    limpiarCaja();
}

function actualizarVista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let amigo of Amigos){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if(elementoHTML)
        elementoHTML.innerHTML = texto;
    else
        document.getElementById(elemento).textContent(texto);
    return;
}

function sortearAmigo(){
    asignarTextoElemento('#resultado', Amigos.length === 0 ? 'La lista esta Vacía' : 'El amigo secreto sorteado es: '+Amigos[Math.floor(Math.random() * Amigos.length)]);
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
