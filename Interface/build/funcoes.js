"use strict";
function monstraPromocao(preco) {
    console.log('Promocao no curso por apenas: ' + preco);
}
const novoCurso = {
    id: '123',
    name: 'blasius',
    preco: 10,
    promocao: (preco) => {
        console.log('teste preco', preco);
    }
};
let somaNumeros = (valor1, valor2) => {
    return valor1 + valor2;
};
const sumNumbers = somaNumeros(10, 20);
console.log('teste sumNumbers', sumNumbers);
