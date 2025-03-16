// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, ingrese un nombre válido y único.');
    }
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const index = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[index];
    
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultado.appendChild(li);
}