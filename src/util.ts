export class Util{
    private name:string;
    
    constructor(name:string){
        this.name = name + 'Roy';
    }

    getName():string{
        return this.name;
    }
}