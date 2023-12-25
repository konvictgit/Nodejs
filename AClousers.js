// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//function bundled together along with its lexical enviromernt

// function x(){
//     var a=7;
//  var a = function y(){
//         console.log(a);
//     }
//     y();
// }
// x();


// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var p = x();
// console.log(p);// will return [function: y]

//p();

// so here p will contain value of a so it's a closure, so will closure will return.
// because it contain refrence of a
// fun along with lexical scope bundle together is closures.

function xa() {
    var as = 6;
    return function u(){  // can directly return here while returning the fun.
        console.log(as);
    }
}
var ds = xa();
console.log(ds);
ds();



function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a = 100; // becaue a is refrence so output will become 100
    return y;
}
var p = x();
console.log(p);// will return [function: y]

p();


function z() {
    var g = 100;
    function q() {
        var t =10;
        function r() {
            console.log(g,t);
        }
        r();
    }
    q();
}
z();

//module desgin pattern
//currying
//fun like once
//memoize
//maintaining state in async world
//settimeout
//Iterators
//and many more
