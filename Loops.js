

//array
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Helloworld"
for (const i of greetings) {
    console.log(`Each char is ${i}`);
}

//foreach loop

///================================================///
//MAPs

const map = new Map()
map.set("Name", "John")
map.set(1, 100)
console.log(map);


for (const [key,value] of map) {
    console.log(key,'::',value);
}


// OBject looping


const myobj = {
    name: 'John',
    age: 30,
    city: 'New York'

};

//forin loop
for (const key in myobj) {
    console.log(`Key ${key} : ${myobj[key]}`)
}

const array = [32,23,43,45,67]

for (const key in array) {
    console.log(array[key]);
}

//foreach loop
array.forEach( function (item){
    console.log(item*2)
} )

//foreachloop with arrow

array.forEach((value)=> {
    console.log(value*5);
})

/////
//can inject a function into forEach loop.
// for each have items,index,whole array.

array.forEach((item,index, arr) => {
    console.log(item,index,arr);
})


/// object looping again

const myCoding = [
    {
        skill:'HTML',
        yearsExp:10
    },
    {
        skill:'CSS',
        yearsExp:8
    },
    {
        skill:'JavaScript',
        yearsExp:5
    }
]

myCoding.forEach((item)=>{
    console.log(item.skill);
    console.log(item.yearsExp);
})