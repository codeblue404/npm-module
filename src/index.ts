import {Util} from './util';

export class SayHelo{
    private util: Util;
    
    constructor(name:string){
        this.util = new Util(name);
    }
    
    beDumb(){
        return "---";
    }

    speak(){
        return `Hello ${this.util.getName()}`;
    }
}