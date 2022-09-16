// para usar os decorators, é necessário descomentar a prop: experimentalDecorators no tsconfig.ts

/* >> DECORATORS <<
  Class
  Propriedades
  Métodos
  Parâmetros (POUCO USADO)
  GETTERS / SETTERS (BEM POUCO USADO)
*/

// Padrão Factory
// function logInfo(mensagem:string){ // por orientações da documentação do ts, parametros de decorators devem ser do tipo 'any'
//   return (target: any)=>{
//     console.log(`${mensagem}, ${target}`)
//   }
// }

// @logInfo("Servidor está rodando")
// class System{
   
// }


// ========= PRATICANDO ============

function setIpServer(newIp:string){
  return(target: any) => { // target é o construtor da nossa classe
    return class extends target{
      ip = newIp;
    }
  }
}

@setIpServer("192.168.5.5")
class Server{

}

const server = new Server();
console.log('teste server', server)