 // segue a mesma lógica dos generics em funções
 
 interface newProduct<T extends string | number>{
    name:string;
    value: T;
    format(valor:T): string;
 }

 const product01: newProduct<number | string> = {
    name:'Macarrão',
    value:1000,
    format(value: number):string{
        let formatedValue = value.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
        return formatedValue;
    }
 }

 console.log('product01', product01.format(1000))