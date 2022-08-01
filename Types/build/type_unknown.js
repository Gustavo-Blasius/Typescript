"use strict";
// tipo desconhecido
let idPedido = 123;
let idPedidoNumber = 234;
//let entregador: number = idPedido; // erro, pois tipos 'unkwnown' só podem ser atribuídos a outros unkwown ou any
let entregador = idPedido;
let secondEntregador = idPedidoNumber;
console.log('teste entregador', entregador);
