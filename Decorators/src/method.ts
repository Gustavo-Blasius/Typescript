import verifyPersonName from './verifyPerson/verifyPerson'

class Person{
    name: string;

    constructor(name:string){
        this.name = name;
    }

    @verifyPersonName(20)
    registerPerson(){
        console.log(`Bem vindo ${this.name} !! `);
    }
}

const blasius = new Person("Blasiusssssss");
blasius.registerPerson();