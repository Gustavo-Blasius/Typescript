class Game {
    constructor(ip:string){
        this.ip = ip;
    }

    private ip:string;

    get getIp(){
        return this.ip;
    }

    set setIp(ip:string){
        if(ip == this.ip){
            throw new Error("O novo endereço do servidor deve ser diferente do atual");
        } else {
            this.ip = ip;
            console.log("novo ip: ", ip)
        }
    }
}

const GTA5 = new Game('192.168.000');

try{
    GTA5.setIp = '192.168.123123123';
}catch(error){
    console.log('erro:', error)
}

console.log(GTA5.getIp);

// os getters e setters são de bom uso para a segurança das classes em questão. Pois dessa forma, podemos defininir o encapsulamento como
// private e fazer as manipulações com os getters e setters