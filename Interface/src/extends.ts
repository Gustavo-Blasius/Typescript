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

interface NewFeature {
    releasedDate: Date,
    featureName: string
}

interface Dlc extends NewFeature{ // quando uso extends, posso pensar no ' É '
    plataform: string[],         // a DLC "Tem" uma plataforma e um jogo
    originalGame: Game
}

const dlcLeft4Dead: Dlc = {
    plataform: ['more game'],
    originalGame: left4dead,
    releasedDate:new Date(),
    featureName: 'Mapa Azilo'
}

console.log('dlc left', dlcLeft4Dead)