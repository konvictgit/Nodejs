//Stack and Heap Memory

// Stack

// Primitive type use (stack) and it always generate copy of a value and you make change in the copy element.

// non primitive type use heap and it always point towards same not different.(Array,Object,Function)
//for eg =>

let user1 ={
    p1: "man",
    p2: "women"
}

let user2 = user1;

user2.p1 = "lola";

//(From line 10 to 17, it a non primitive(because object)(refrence type) so it will use heap) and even i changed p1 value by accessing from user2 it wont change it will remain show man if we do console.log) change will only happen in original value at anycost.

let my = "hello";
let myt = my;