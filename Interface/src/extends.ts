interface Game{
    readonly id:string,
    name: string,
    price: number,
    status: boolean,
}

const left4dead: Game ={
    name:'Left4Dead',
    id: '123',
    price:200,
    status:true
}

interface Dlc extends Game {
    plataform: string[],
    originalGame: Game
}

const dlcLeft4Dead: Dlc = {
    id: '222',
    name:'Left4Dead',
    price:200,
    status:true,
    plataform: ['more game'],
    originalGame: left4dead
}

console.log('dlc left', dlcLeft4Dead)