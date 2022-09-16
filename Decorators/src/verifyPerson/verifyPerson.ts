export default function verifyPersonName(age:number){
    return(target:any, key:string, descriptor:PropertyDescriptor)=>{

        const originalMethod = descriptor.value;

        descriptor.value = function () {
            if(age < 18){
                console.log("Estamos cadastrando como Pessoa menor de idade");
            } else {
                console.log("Adulto cadastrado no sistema");
                return originalMethod.apply(this);
            }
        }
    }
}