const form = document.getElementById('formdreieck');
const resultado = document.getElementById('resultado');
const limparButton = document.getElementById('limpar');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const area = (base * altura) / 2;

    resultado.innerHTML = `A área do triângulo é: ${area}`;
});

limparButton.addEventListener('click', function() {
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    resultado.innerHTML = '';
});