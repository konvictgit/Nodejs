
function a() {
c()
    function c() {
        console.log(b);
    }
//console.log(b);
}
var b = 5;

a()


// lexcial env. - c function is lexciallay sitting inside function a and a is lexcially inside global exectution context