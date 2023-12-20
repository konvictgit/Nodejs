/*
<
>
<=
>=
==
!=
===
!== 
*/

/*

ifelse

*/

// if else statement


//falsy values
// false, 0, -0, bigint 0n,null,undefined,NaN,""
//truthy values
// "0",'false', " ",{},[],function(){} and others which are true.

//Nullish Coalescing Operator (??): null undefined

let val;
val1 = 5 ??10

val2 = null ?? 20

val3 = undefined??30

console.log(val1);
console.log(val2);
console.log(val3);

// basically it's a call back operator
// so we can see that if we are getting two output from some where and we need to pick one which is not null this (??) operator can help us.


//Terniary operator

// condition ? true:false
const age=18;
const isOldEnoughToVote=(age >=18)?"Yes":"No";
console.log(isOldEnoughToVote);