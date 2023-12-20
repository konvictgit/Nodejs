//Immediately Invoked Fun Expressions (IIFE)


//named IIFE
(function one() {
    console.log(`DB Connected`);
})();


//to decrease global scope pollution (function)(calling function for ex {one()} => is execution call)


//Arrow IIFE
(()=>{
    console.log(`DB connected`);
})();


//with parameter IIFE

((nono)=>{
    console.log(`DB connected ${nono}`);
})("nonu");

