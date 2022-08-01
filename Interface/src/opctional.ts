
interface OptionalProps{
    name?:string, // name == parâmetro opcional
    age:number
}

function optionalTest({name, age}:OptionalProps){
    console.log('teste',name, age)
}

let _test2 = { // nesse caso, o param 'name' não é orbrigatório
    name: 'gustavo',
    age:20
}

optionalTest(_test2)