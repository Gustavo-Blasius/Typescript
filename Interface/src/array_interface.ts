interface TecnologiaProps {
    readonly id: string;
    nome:string;
    descricao?:string;
}

interface NomesProps{
    tecnologia: TecnologiaProps[]
}

let frontend: NomesProps = { // aqui temos um array de interfaces, ou seja, usamos a interface NomesProps
    tecnologia:[
        {id:'123', nome:'react', descricao:'teste'}
    ],
}

// ________________________________________________ // Resumindo, é um array de interfaces
interface PersonProps {
    name: string,
    age: number,
    sex: string
}

interface listPerson{
    data: PersonProps[]
}

let teste: listPerson = {
    data: [
        {name: 'gustavo', age:20, sex: 'man'},
        {name: 'leticia', age:20, sex: 'woman'}
    ]
}

console.log('front', teste)