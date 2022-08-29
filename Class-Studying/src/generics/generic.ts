// Permite criar estruturas que serão adaptáveis a vários tipos de dados
// Ajuda a reaproveitar melhor o código e deixa-lo mais flexível

// Podemos usar os generics:
// Funções |  Interface / Type | classes

/* 
    Alguns padrões comuns para generics:
    S => State
    T => Type
    K => Key
    V => Value
    E => Element
*/

interface CursoProps{
    id: string,
    name:string,
    preco:number,
    promocao: (preco: number) => void;
}

interface DataTest{
    id:number,
    name:string,
    value:number
}

function withInterface<DataTest>(){
     function testInterface(data:DataTest){
        console.log('data testInterface', data);
        return data
    }

    return {testInterface};
}

function repository<T extends string | number>(){ // o extends nesse caso, significa que quem passar a tipagem só pode escolher entre esses 2 valores
     let data: T;

     function getData(){
        return data;
     }

     function setData(newData:T){
        data = newData;
     }

     return {getData, setData}
}

const interface01 = withInterface<DataTest>();
interface01.testInterface({id:10, name:'gustavo', value:10000});

const repo1 = repository<number | string>(); // dessa forma, definimos a tipagem da função no momento em que chamamos ela
repo1.setData(100);