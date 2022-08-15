"use strict";
// 4 MODIFICADORES: Public, Private, Protected, readonly
class Usuario {
    constructor(name, email, id) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.internal = 'Dados internos';
    }
}
class Admin extends Usuario {
    constructor(name, email, cargo, nivel, id) {
        super(name, email, id); // esse super é referente ao constructor da class Usuário. Ou seja, esses parâmetros são tratados no
        // constructor da class usuário
        this.id = id;
        this.cargo = cargo;
        this.nivel = nivel;
    }
    publicMethod() {
        console.log('public');
    }
    privateMethod() {
        console.log('private');
    }
    functionProtected() {
        return 'whatever';
    }
}
const newAdmin = new Admin('Gustavo', 'blasiusgustavo19@gmail.com', 'AAAA', 'USER', '1234567');
newAdmin.cargo = 'desenvolvedor';
//newAdmin.functionProtected(); Irá acontecer um erro, pois o encapsulamento só é acessível em classes e subclasses;
console.log('newAdmin', newAdmin);
//console.log('publicMethod', newAdmin.publicMethod());
// console.log('privateMethod', newAdmin.privateMethod()); -- ERR
