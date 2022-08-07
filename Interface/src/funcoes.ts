interface CursoProps{
    id: string,
    name:string,
    preco:number,
    promocao: (preco: number) => void;
}

function monstraPromocao(preco:number):void {
    console.log('Promocao no curso por apenas: ' + preco);
}

const novoCurso: CursoProps = {
    id:'123',
    name:'blasius',
    preco: 10,
    promocao: (preco: number):void => {
        console.log('teste preco', preco)
    }
}
// novoCurso.promocao(20)

//const novoCurso: CursoProps = {
//     id:'123',
//     name:'blasius',
//     preco: 10,
//     promocao: monstraPromocao
// }
// console.log('teste novo curso', novoCurso.promocao(200))


 interface SomaNumeros{
    (valor1:number, valor2: number): number;
 }

 let somaNumeros: SomaNumeros = (valor1: number, valor2: number):number =>{
    return valor1 + valor2
 }

 const sumNumbers = somaNumeros(10,20);

 console.log('teste sumNumbers', sumNumbers); 
