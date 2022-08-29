// 1 - Fazer as funções de calculo

interface Calculator{
    value01: number,
    value02: number,
    operation: string
}

function mainCalculator({value01, value02, operation}:Calculator){

    if(!value01){
        console.log('testestesteste')
    }

    switch (operation) {
        case '+':
        
        return sum(value01, value02)

        case '-':
        
        return subtraction(value01, value02)
        
        case '/':
        
        return divide(value01, value02)
        
        case '*':
        
        return multiply(value01, value02)
    
        default:
            break;
    }
}

function sum(value01:number, value02:number){
    return value01 + value02;
}

function subtraction(value01:number, value02:number){
    return value01 - value02;
}

function divide(value01:number, value02:number){
    return value01 / value02;
}

function multiply(value01:number, value02:number){
    return value01 * value02;
}

let info: Calculator = {
    value01: 0,
    value02: 20,
    operation: '+'
}

const teste = mainCalculator(info);

console.log('teste', teste)