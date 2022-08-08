interface ProdutoProps {
    readonly id:string, // não deixa a prop ser alterada
    nome:string,
    descricao:string;
}

let produto1: ProdutoProps = {
    id: '1',
    nome:'gustavo',
    descricao: 'algum teste'
}

//produto1.id = '123'; // da erro, pois a prop id é apenas para leitura (readOnly)

console.log('teste produto', produto1)