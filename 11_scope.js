let a =10;
const b =20;
var c = 30;

// var is no good 

// things avialable in globle scope are avilable in eveysocpe but something avalable inside scope cannot be avilable in globle

if (true) {
    a = 50
}  // block scope

a = 500 //global scope

// there is a difference btw node scope and browser sope


function one() {
    const user = "asd"

    function two() {
        const web = "qwe"
        console.log(user,web);
    }
    //console.log(web); not possible becaue its global for two
    two();
}

one();


//------------------------------//

add(1) 
function add(num){
    return num +1
}



addtow(5)
const addtow = function add(num){

    return num+5
}



// 2 type of syntax here where add(1) can be called and accesed but not addtow() because we used it as variable becaue we used it as hoisting.

//========================//

//Arrow Function, Implicite return

const user ={
    name: 'John',
    age:32,

    welcome: function () {
        console.log(`${this.name}, welcome`);
    }

    // for particular scope in current contex when we need to acces we use this.
}

function chai(){
    console.log(this); // we get mutiples values here in function scope but not in global.
}



function a(){
    const user = "hello"
    console.log(this.user);
}
a()

