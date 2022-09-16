"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function verifyPersonName(age) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            if (age < 18) {
                console.log("Estamos cadastrando como Pessoa menor de idade");
            }
            else {
                console.log("Adulto cadastrado no sistema");
                return originalMethod.apply(this);
            }
        };
    };
}
exports.default = verifyPersonName;
