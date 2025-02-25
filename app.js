let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        const lista = document.getElementById('listaAmigos');
        const item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);
        input.value = '';
    } else {
        alert('Por favor, introduce un nombre válido y que no esté ya en la lista.');
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const amigosMezclados = [...amigos].sort(() => Math.random() - 0.5);

    amigosMezclados.forEach((amigo, index) => {
        const siguienteIndex = (index + 1) % amigosMezclados.length;
        const item = document.createElement('li');
        item.textContent = `${amigo} le regala a ${amigosMezclados[siguienteIndex]}`;
        resultado.appendChild(item);
    });
}
