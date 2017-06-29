var myapp = require('../lib/index').SayHelo;
console.log(myapp);
x = new myapp('nil');
console.log(x.beDumb());
console.log(x.speak());
