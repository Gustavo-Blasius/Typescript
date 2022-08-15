"use strict";
class BankAccount {
}
//const _bank = new BankAccount(); // isso não funciona
//_bank.createAccount({name:'Blasius', cpf:1234567, status:'SOLTEIRO'}); // isso não funciona
// por que? pois uma classe abstrata, é apenas um 'protocolo' de criação de classes
class AccountPerson extends BankAccount {
    createAccount(data) {
        console.log('data', data);
        return true;
    }
}
const blasius = new AccountPerson();
blasius.createAccount({ name: 'Blasius', cpf: 1234567, status: 'SOLTEIRO' });
