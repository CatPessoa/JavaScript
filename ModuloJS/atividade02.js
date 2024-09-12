let n1 = Number(prompt("Digite o primeiro número"));
let n2 = Number(prompt("Digite o segundo número"));

let soma = n1 + n2;
let sub =  n1 - n2;
let mult = n1 * n2;
let divisao = n1 / n2;
let modulo = n1 % n2;
let potencia = n1 ** n2;

console.log(n1 + n2);
console.log(soma);
console.log(sub);
console.log(mult);
console.log(divisao);
console.log(modulo);
console.log(potencia);
console.log(n1**0,5);
console.log(n2**0,5);

function calcularBhaskara() {
    // Solicita os coeficientes ao usuário
    let a = parseFloat(prompt("Digite o valor de a:"));
    let b = parseFloat(prompt("Digite o valor de b:"));
    let c = parseFloat(prompt("Digite o valor de c:"));

    // Calcula o discriminante
    let delta = b * b - 4 * a * c;

    // Verifica se a equação é quadrática
    if (a === 0) {
        alert("O valor de 'a' não pode ser zero. Não é uma equação quadrática.");
        return;
    }

    // Calcula as raízes
    if (delta > 0) {
        let raizDelta = Math.sqrt(delta);
        let x1 = (-b + raizDelta) / (2 * a);
        let x2 = (-b - raizDelta) / (2 * a);
        alert(`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`A equação tem uma raiz real: x = ${x}`);
    } else {
        alert("A equação não possui raízes reais.");
    }
}
