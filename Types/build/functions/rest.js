"use strict";
// function totalVendas(venda1: number, venda2:number, venda3:number, venda4:number): number{
//     const total = venda1 + venda2 + venda3 + venda4;
//     return total;
// }
function totalVendas(...vendas) {
    let amount = 0;
    let totalSend = vendas.length;
    vendas.map(item => {
        amount += item;
    });
    console.log('Você teve um total de ', totalSend, ' vendas, chegando no total de R$', amount);
}
function totalNomes(...nomes) {
    nomes.map(item => {
        console.log('nome:', item);
    });
}
totalNomes('Gustavo', 'Natan', 'Lucas', 'Mario');
totalVendas(1, 2, 3, 4, 5, 6, 7);
