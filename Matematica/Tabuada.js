document.getElementById('formmultiplikation').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero').value);

    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
});