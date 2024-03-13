let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);//es un método del objeto Document que se utiliza para seleccionar elementos del DOM mediante selectores CSS
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    if (numeroSecreto === numeroDeUsuario){

        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Número secreto es menor');
        }else{
            asignarTextoElemento('p', 'Número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        console.log(intentos);
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //selector generico

}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log("****" + numeroGenerado);
    console.log("-----"+listaNumerosSorteados);

    //si ya sorteamos todos los numeros reiniciemos el juego 

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "Ya se sortearon todos los numeros")
        //reiniciarJuego();
    }else{
            //si el numero generado esta incluido en las lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
        }
    
}

function condicionesIniciales(){

    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número de l al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){

    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

