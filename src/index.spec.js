/// <reference path="../lib/index.js" />
/// <reference path="../node_modules/@types/jasmine/index.d.ts" />


let SayHelo = require('../lib/index').SayHelo;

describe("index", () => {

    it('should pass', () => {
        expect(true).toBe(true);
    })

    it('does something', () => {
        //console.log(SayHelo);
        let hello = new SayHelo('Niladri ');
        expect(hello.speak()).toMatch("Hello");
    })
    
})