// para usar os decorators, é necessário descomentar a prop: experimentalDecorators no tsconfig.ts

/* >> DECORATORS <<
  Class
  Propriedades
  Métodos
  Parâmetros (POUCO USADO)
  GETTERS / SETTERS (BEM POUCO USADO)
*/

// Padrão Factory
function logInfo(mensagem:string){ // por orientações da documentação do ts, parametros de decorators devem ser do tipo 'any'
  return (target: any)=>{
    console.log(`${mensagem}, ${target}`)
  }
}

@logInfo("Servidor está rodando")
class System{
   
}