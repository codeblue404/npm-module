import {Util} from './util';

export class SayHelo{
    private util: Util;
    
    constructor(name:string){
        this.util = new Util(name);
    }
    
    beDumb(){
        console.log("---");
    }

    speak(){
        console.log(`Hello {this.util.getName()}`);
    }
}