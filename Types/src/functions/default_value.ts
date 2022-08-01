function registration(name:string, age:number, sex?:string):object { // o caractere '?' na frente da tipagem, tem a mesma função do operador elvis. Se não houver nada, o parametro vira undefined
    let data = {name:name, age:age, sex:sex} 
    return data ;
}

//let _teste = registration('gustavo', 30, 20); //  erro, pois o último paramentro PRECISA ser string ou undefined
let _teste = registration('gustavo',30,'masc')

console.log(_teste, 'testando');