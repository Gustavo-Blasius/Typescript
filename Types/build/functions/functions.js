"use strict";
// devemos tipar quais os parâmetros esperados e qual o retorno da função
// caso não seja definido nenhum tipo de retorno na função, o retorno será do tipo void (não retornará nada)
function funcaoSemRetorno(username) {
    console.log('teste username', username);
}
function funcaoStringRetorno(name) {
    const _name = "Usuário:" + name;
    return _name;
}
function nameOrBoolean(name, bool) {
    if (name == 'gustavo') {
        return true;
    }
    return bool;
}
let _nameOrBoolean = nameOrBoolean('gustavo1111111', true);
//console.log('nameOrBoolean: ->', _nameOrBoolean);
let brotherName = funcaoStringRetorno('Arthur Blasius');
//console.log('borther', brotherName);
//funcaoSemRetorno('Gusatvo Blasius')
function main(name, age, man) {
    let firstSentence = "Hi! My name is " + name + ", and i have " + age + " years old";
    if (man)
        firstSentence += ' and I am a man';
    return firstSentence;
}
function sum(n1, n2) {
    return n1 + n2;
}
let frase = main('Gustavo', 12, true);
//console.log('frase', frase )
console.log('somatória', sum(10, 2));
