// 4 MODIFICADORES: Public, Private, Protected, readonly

// Public: Todos tem acesso ao método / atributo
// Private: Somente quem o criou pode acessar e alterar o método / atributo
// Protected: Pode ser acessado e modificado em sua própria classe, e na classe em que foi herdada
// readonly: Somente em atributo, apenas para visualização


type NIVEL = 'ADM' | 'USER';

 class Usuario{
    constructor(name:string, email:string, id: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.internal = 'Dados internos'
    }

    
    name:string; // mesma coisa que public ...
    public email:string;
    private internal:string // poderá ser acessada somente dentro da classe USUÁRIO
    protected id: string; // pode ser acessado apenas na própria classe em em suas subclasses
 }

 class Admin extends Usuario {

    constructor(name:string, email:string, cargo:string, nivel:NIVEL, id:string){

        super(name, email, id) // esse super é referente ao constructor da class Usuário. Ou seja, esses parâmetros são tratados no
        // constructor da class usuário
        this.id = id;
        this.cargo = cargo;
        this.nivel = nivel;
    }  

    cargo: string;
    nivel: NIVEL;
    id: string;

    publicMethod():void {
        console.log('public')
    } 

   private privateMethod():void {
        console.log('private')
    }

    protected functionProtected():string{
        return 'whatever';
    }
}

 const newAdmin = new Admin('Gustavo', 'blasiusgustavo19@gmail.com', 'AAAA', 'USER', '1234567');
 newAdmin.cargo = 'desenvolvedor';
 //newAdmin.functionProtected(); Irá acontecer um erro, pois o encapsulamento só é acessível em classes e subclasses;

 console.log('newAdmin', newAdmin)

 //console.log('publicMethod', newAdmin.publicMethod());
 // console.log('privateMethod', newAdmin.privateMethod()); -- ERR