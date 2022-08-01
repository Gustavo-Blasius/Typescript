"use strict";
// Tipagem DINAMICA
// Define o tipo da variável na declaração
let teste = 'Gustavo';
// teste = 100; It will return a error
let array = ['Number', true];
array.push('teste');
array.push(true);
// array.push(1);   It will return a error, because this array just accept string
console.log('teste array', array);
