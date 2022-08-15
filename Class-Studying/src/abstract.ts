type civilStatus = 'SOLTEIRO' | 'CASADO' | 'VIUVO';

interface DataPerson{
    name:string,
    cpf: number,
    status: civilStatus
}

abstract class BankAccount{ // é quando eu quero que uma classe siga um padrão de criação
    abstract createAccount(data:DataPerson):boolean;
}

//const _bank = new BankAccount(); // isso não funciona
//_bank.createAccount({name:'Blasius', cpf:1234567, status:'SOLTEIRO'}); // isso não funciona
// por que? pois uma classe abstrata, é apenas um 'protocolo' de criação de classes

class AccountPerson extends BankAccount{
    createAccount(data: DataPerson): boolean {
        console.log('data', data);
        return true;
    }
}

const blasius = new AccountPerson();

blasius.createAccount({name:'Blasius', cpf:1234567, status:'SOLTEIRO'});
