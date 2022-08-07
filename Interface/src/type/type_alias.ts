type Uuid = number | string | null;

function acessar(uuid: Uuid, nome:string){
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}

type Moedas = 'BR' | 'USD' | 'EUR';

function comprarItem(moeda: Moedas){
    console.log('moeda', moeda)
}

comprarItem('USD');