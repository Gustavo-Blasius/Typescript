
function validateName(lenght:number) {
    return (target:any, key:string) => {
        let valor = target[key];

        const getter = () => valor;

        const setter = (value: string )=>{
            if(value == ""){
                console.log("Você não pode criar propriedades vazias")
            } else if(value.length < lenght){
                console.log("Você não pode criar com esse tamanho")
            } else{
                valor = value;
            }

        }

        Object.defineProperty(target, key,{
            get: getter,
            set: setter
        })
    }
    
}

class Game{

    @validateName(4)
    name:string;

    constructor(name:string){
        this.name = name;
    }

}

const game1 = new Game("Gustavo");

console.log('jogo: ', game1.name);