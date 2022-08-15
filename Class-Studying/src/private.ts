class Auth{
    constructor(){
        this.qtd = 0;
        this.auth = false;
    }
    qtd: number;
    auth:boolean

    login(auth:boolean, quantidade:number):void | boolean{
        if(auth){
            this.auth = true;
            this.countQtd(quantidade);
        } else {
            return false;
        }
    }

    private countQtd(quantidade:number){
        this.qtd = quantidade;
        console.log('está logado!! quantidade: ', quantidade);
    }

    protected acessLoginData(){
        console.log('this.auth', this.auth);
        return this.auth;
    }
}

class DataAuth extends Auth {
    getAuthData(){
        super.acessLoginData(); // função com método protected;
    }
}

const _auth = new Auth();
//_auth.login(true, 50);
// _auth.countQtd(20) // isso não funciona, pois é um método privado
// _auth.acessLoginData(); // erro, pois é um método protected

const dataAuth = new DataAuth();
//dataAuth.getAuthData();


class Conta {
    private limite: number = 50;

    private aumentarLimite(quantidade: number){
        console.log('seu limite é: ', this.limite);
        if(quantidade < 1000){
            this.limite = quantidade;
            console.log(`Agora seu limimite é de: ${this.limite}`);
        } else {
            console.log('Infelizmente seu limite foi reprovado! limite: ', this.limite);
        }
    }

    protected solicitarLimite(quantidade: number){
        return this.aumentarLimite(quantidade);
    }

    solicitarLimiteApp(auth:boolean, quantidade:number){
        if(auth){
            this.aumentarLimite(9000);
        } else{
            console.log('Voce não está logado !! ');
        }
    }
}

const account =  new Conta();
account.solicitarLimiteApp(true, 1000);
