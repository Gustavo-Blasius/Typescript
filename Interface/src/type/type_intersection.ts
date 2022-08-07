type Info = {
    readonly id:string,
    name:string
}

const info1:Info = {
    id:'123',
    name:'gustavo'
}

type Categoria = {
    section: string,
    public: string
}

const categoria1:Categoria = {
    section:'Moda',
    public: 'Jovem'
}

type ProductInfo = Info & Categoria;

const product1:ProductInfo = {
    id:'234',
    name:'teste',
    section:'cook',
    public:'old'
}  