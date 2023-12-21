//filters

const myCoding = [1,2,3,4,5,6,7,8,9,10]

const newnum = myCoding.filter((num)=> {
    return num>4
});
console.log(newnum) //[6, 7, 8, 9, 10]



///for each methord
const noonum = []

myCoding.forEach((num)=> {
    if(num > 4){
        noonum.push(num);
    }
})
console.log(noonum)//[6, 7, 8, 9, 10]</s>


//Map

const tt = myCoding.map((num)=> num+10)
console.log(tt);


const nnsa = myCoding.map((num)=> num*10).map((num) =>num+1)
console.log(nnsa);


/////////------------------//////////

//Reduce

//accumulator,current value,initial value


const reduce = myCoding.reduce(function (acc,crrval){
    
    console.log(`Acc:${acc} CrrVal: ${crrval}`);
    return acc + crrval
},0)

console.log(reduce);