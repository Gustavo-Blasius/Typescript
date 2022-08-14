// 4 MODIFICADORES: Public, Private, Protected, readonly

// Public: Todos tem acesso ao método / atributo
// Private: Somente quem o criou pode acessar e alterar o método / atributo
// Protected: Pode ser acessado e modificado em sua própria classe, e na classe em que foi herdada
// readonly: Somente em atributo, apenas para visualização


type NIVEL = 'ADM' | 'USER';

 class Usuario{
    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
    }

    name:string;
    email:string;
 }

 class Admin extends Usuario{

    constructor(name:string, email:string, cargo:string, nivel:NIVEL){

        super(name, email) // esse super é referente ao constructor da class Usuário. Ou seja, esses parâmetros são tratados no
        // constructor da class usuário

        this.cargo = cargo;
        this.nivel = nivel;
    }  

    cargo: string;
    nivel: NIVEL;

    publicMethod():void {
        console.log('public')
    } 

   private privateMethod():void {
        console.log('private')
    }
}

 const newAdmin = new Admin('Gustavo', 'blasiusgustavo19@gmail.com', 'AAAA', 'USER')
 newAdmin.cargo = 'desenvolvedor';

 console.log('newAdmin', newAdmin)

 //console.log('publicMethod', newAdmin.publicMethod());
 // console.log('privateMethod', newAdmin.privateMethod()); -- ERR