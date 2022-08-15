"use strict";
class Person {
    constructor(name, age) {
        this.id = '123'; // funciona apenas para atributos, e não para métodos
        this.name = name;
        this.age = age;
    }
    showInfo() {
        // this.id = '123123123213213'; gera erro, pois a o atributo 'id' é apenas para leitura.
        console.log(`name: ${this.name}, age: ${this.age}, id: ${this.id}`);
    }
}
const person = new Person('Gustavo', 21);
person.showInfo();
