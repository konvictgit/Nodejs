// function x() {
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     },1000);
//     console.log("Abhishek");
// }
// x();


function x() {
    for (let i = 1; i <=5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i* 5000);
        
        
    }
    console.log("Abhishek");
    
}
x();


//// -- reduce -- \\\\\
const namea = [
    {firstname:"abc",lastname:"def",age:32},
    {firstname:"eee",lastname:"rrr",age:22},
    {firstname:"qqq",lastname:"rrr",age:55},
]

const output = namea.reduce(function (arr,curr) {
    if (curr.age < 36) {
        arr.push(curr.firstname)
    }
    return arr
},[])

console.log(output);

