"use strict";
function optionalTest({ name, age }) {
    console.log('teste', name, age);
}
let _test2 = {
    name: 'gustavo',
    age: 20
};
optionalTest(_test2);
