"use strict";
let loja;
loja = {
    name: 'gustavo',
    age: 30,
    email: 'gustavo@blasius'
}; // mas e se eu quiser deixar cada prop desse objeto como obrigatória ???
let test = {
    name: 'Gustavo',
    age: 20,
    status: false,
    tall: 1.52,
    store: {
        name: 'clinicorp',
        cnpj: 123456789
    }
};
// function newStore({...params}:InfoStore){
//     console.log(params)
// }
function newStore({ name, type, amount, status }) {
    console.log(name, type, amount, status);
}
// let test: TestProp = { // assim da erro, pois é obrigatório passar a prop: tall
//     name:'Gustavo',
//     age: 20,
//     status: false,
// } 
let _test = {
    name: 'clini',
    type: 'sass',
    amount: 30,
    status: true
};
newStore(_test);
