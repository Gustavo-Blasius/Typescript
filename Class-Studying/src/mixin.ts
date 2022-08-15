import {applyMixins} from './mixin/applyMixin'

class Automovel{
    on():void{
        console.log('POWER ON !!')
    }

    off():void{
        console.log('POWER OFF !! ')
    }
}

class Description{
    constructor(description:string){
        this.description = description;
    }

    description: string;
}

// class Car extends Automovel, Description { // ERROR: mas e se eu quiser extender mais de uma classe, como faço??

// }

class Car {
    constructor(name: string){
        this.name = name
    }
    name:string;
}

interface Car extends Automovel, Description {} // utilizamos a interface para fazer essa junção entre classes

applyMixins(Car, [Automovel, Description]);

const Gol = new Car('Gol 1.6');
Gol.on();
Gol.description = 'C-R-O-C-O-D-I-L-O';
Gol.off();

console.log("teste", Gol.description);