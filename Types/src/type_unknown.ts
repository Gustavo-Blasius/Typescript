// tipo desconhecido

let idPedido: unknown = 123;
let idPedidoNumber: number = 234;

//let entregador: number = idPedido; // erro, pois tipos 'unkwnown' só podem ser atribuídos a outros unkwown ou any
let entregador: unknown = idPedido;
let secondEntregador: number = idPedidoNumber

console.log('teste entregador' , entregador)