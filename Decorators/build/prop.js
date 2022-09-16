"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateName(lenght) {
    return (target, key) => {
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value == "") {
                console.log("Você não pode criar propriedades vazias");
            }
            else if (value.length < lenght) {
                console.log("Você não pode criar com esse tamanho");
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Game {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    validateName(4)
], Game.prototype, "name", void 0);
const game1 = new Game("Gustavo");
console.log('jogo: ', game1.name);
