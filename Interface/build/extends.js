"use strict";
const left4dead = {
    name: 'Left4Dead',
    id: '123',
    price: 200,
    status: true
};
const dlcLeft4Dead = {
    id: '222',
    name: 'Left4Dead',
    price: 200,
    status: true,
    plataform: ['more game'],
    originalGame: left4dead
};
console.log('dlc left', dlcLeft4Dead);
