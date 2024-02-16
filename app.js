
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 3;
function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
};
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Acertaste el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es mayor!')
        } else {
            asignarTextoElemento('p', 'El numero secreto es menor!')  
        }
        intentos++;
        limpiarCaja();
    } 
    return
};
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
};
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
     return generarNumeroSecreto();
    } else {
     listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
    }
 };
} 
function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales ();    
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();
