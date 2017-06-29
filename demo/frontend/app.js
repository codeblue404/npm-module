var $ = require('jquery');

$(document).ready(function () {
    
    var SayHello = require('../../lib/index').SayHelo;
    var name = "niladri";
    console.log(SayHello);
    x = new SayHello('nil');
    x.beDumb();
    x.speak();
    $("#name").text(name);
});