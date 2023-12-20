

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