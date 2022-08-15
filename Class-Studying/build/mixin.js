"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    on() {
        console.log('POWER ON !!');
    }
    off() {
        console.log('POWER OFF !! ');
    }
}
class Description {
    constructor(description) {
        this.description = description;
    }
}
// class Car extends Automovel, Description { // ERROR: mas e se eu quiser extender mais de uma classe, como faço??
// }
class Car {
    constructor(name) {
        this.name = name;
    }
}
(0, applyMixin_1.applyMixins)(Car, [Automovel, Description]);
const Gol = new Car('Gol 1.6');
Gol.on();
Gol.description = 'C-R-O-C-O-D-I-L-O';
Gol.off();
console.log("teste", Gol.description);
