"use strict";
function registration(name, age, sex) {
    let data = { name: name, age: age, sex: sex };
    return data;
}
//let _teste = registration('gustavo', 30, 20); //  erro, pois o último paramentro PRECISA ser string ou undefined
let _teste = registration('gustavo', 30, 'masc');
console.log(_teste, 'testando');
