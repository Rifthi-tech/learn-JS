// closure
function outer (){
    var a = 10;
    function inner (){
        var b = 90;
        return a + b;
    }
    return inner;
}

const fn = outer();
console.log(fn());
