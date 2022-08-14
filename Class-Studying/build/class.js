"use strict";
class Store {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
    criarLoja() {
        console.log(`Loja:${this.name}, Categoria:${this.category}`);
    }
    emitirPedido(mesa, ...pedidos) {
        const allPedidos = pedidos.map(item => {
            return item;
        });
        return 'Pedidos da mesa: ' + mesa + ': ' + allPedidos;
    }
}
const redBurguer = new Store("Red burguer", 'Lanches');
const iceCream = new Store("Big IceCream", 'Ice-cream');
const pedidoMesa = redBurguer.emitirPedido(29, 'Coca', 'Lanche', 'Sorvete');
console.log('pedido', pedidoMesa);
