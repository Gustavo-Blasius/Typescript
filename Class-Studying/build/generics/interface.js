"use strict";
// segue a mesma lógica dos generics em funções
const product01 = {
    name: 'Macarrão',
    value: 1000,
    format(value) {
        let formatedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return formatedValue;
    }
};
console.log('product01', product01.format(1000));
