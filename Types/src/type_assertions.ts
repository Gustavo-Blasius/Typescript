// Afirmando algum tipo
let assertion: unknown = 123;


// Estamos afirmando que o type_assertion é de fato um número

//let typeAssertion = <number>assertion;
let typeAssertion = assertion as number;


let query: unknown = 'pizza';
let searchTerm = query as string;

console.log('teste serachTerm', searchTerm)