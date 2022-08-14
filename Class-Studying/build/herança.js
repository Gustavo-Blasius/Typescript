"use strict";
// 4 MODIFICADORES: Public, Private, Protected, readonly
class Usuario {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(name, email, cargo, nivel) {
        super(name, email); // esse super é referente ao constructor da class Usuário. Ou seja, esses parâmetros são tratados no
        // constructor da class usuário
        this.cargo = cargo;
        this.nivel = nivel;
    }
    publicMethod() {
        console.log('public');
    }
    privateMethod() {
        console.log('private');
    }
}
const newAdmin = new Admin('Gustavo', 'blasiusgustavo19@gmail.com', 'AAAA', 'USER');
newAdmin.cargo = 'desenvolvedor';
console.log('newAdmin', newAdmin);
//console.log('publicMethod', newAdmin.publicMethod());
// console.log('privateMethod', newAdmin.privateMethod()); -- ERR
