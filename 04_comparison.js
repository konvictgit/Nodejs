//primitive and non primitive data type

//how can you access data and how data is store in memory is defining term of datatype categories

//primitive(call by value = when you copy, refrrence is not given, only copy is given and change are made in copy) = String,Number.Boolean,Null(empty it is, not zero),undefined(variable is decalered,memory is allocated but no value is given),Symbol(to make any value unique(fronted high level)),BigInt(big values,scientific values).


//JS is dynamic or static typed

const score = 100;
const as = 100.3;

const re = false;
const tr = null;
let s ;

//symbol
const id = Symbol('123');
const idd = Symbol('123');
console.log(id === idd); //false

// non primitive(refrence type)- Array,Objects,Function

const hero = ["iron","man"];

let myobj = {
    namea :"Tony Stark",
    age : 22
};

const fun = function(){
 console.log("Hello");
}

//type of operator
console.log(typeof myobj);




