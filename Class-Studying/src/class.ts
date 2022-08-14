class Store{
    constructor(name:string, category:string){
        this.name = name;
        this.category = category;
    }

    name:string;
    category:string;

    criarLoja():void{
        console.log(`Loja:${this.name}, Categoria:${this.category}`)
    }

    emitirPedido(mesa: number, ...pedidos:string[]):string{

        const allPedidos = pedidos.map(item=>{
            return item;
        })

        return 'Pedidos da mesa: ' + mesa + ': ' + allPedidos;
    }
}

const redBurguer = new Store("Red burguer", 'Lanches');
const iceCream = new Store("Big IceCream", 'Ice-cream')

const pedidoMesa = redBurguer.emitirPedido(29, 'Coca', 'Lanche', 'Sorvete');
console.log('pedido', pedidoMesa);