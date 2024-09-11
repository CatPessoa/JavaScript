let frase = prompt('digite uma frase');

console.log(frase);

let comprimento = frase.length;
let minusculo = frase.toLocaleLowerCase;
let maiusculo = frase.toLocaleUpperCase;
let separar = frase.split( );


console.log('Sua frase possui $(comprimento) caracteres');

console.log('sua frase em minusculo: $(minusculo)');

console.log('sua frase em maiusculo: $(maiusculo)');

console.log('sua frase separada: $(separar)');
