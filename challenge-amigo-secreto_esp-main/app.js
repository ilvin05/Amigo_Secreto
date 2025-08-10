// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.//
//creamos nuestra lista 
let amigos = [];
// Creamos nuestra funcion para agregar los nombres a la lista
function agregarAmigo(){
const input = document.getElementById("amigo");
const nombre = input .value.trim();

    if (nombre !== ""){
    amigos.push(nombre);
    mostrarAmigos();
    input.value = "";
        
    } else {
        alert("Por favor escriba un nombre.");
    }

}
// Creamos la funcion para mostrar la lista de los nombre agregados
function mostrarAmigos(){

    const listaHTML = document.getElementById("resultado");
    listaHTML.innerHTML = "";
    amigos.forEach(( amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);

    });
}
// Aqui creamos la funcion para soltear el amigo secreto
function sortearAmigo(){
    if (amigos.length===0){
        alert("Agrega almenos un amigo para poder soltear.");
        return;
    }
    const i = Math.floor(Math.random()*
    amigos.length);
    const seleccionado = amigos [i];
    console.log("Sorteado:",seleccionado);
    document.getElementById("resultado").textContent = `El amigo secreto es: ${seleccionado}`;

}

