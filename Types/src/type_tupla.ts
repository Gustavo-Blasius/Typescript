// Tupla não possui no js, apenas no Typescript

let arrayTupla: [number, string];

//arrayTuplace = [10]; // it will return a error, because MUST be a number and a string
arrayTupla = [10,'teste'];
arrayTupla.push('string primeiro', 20);

console.log('arrayTupla', arrayTupla);