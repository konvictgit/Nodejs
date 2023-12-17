//singleton only when construstuctor
//=============================================


//object literals
const as ={
    name:"ab",
    age:25,
    location:"jaipur",
    isloggedin: true,
    email:"abc@gmail.com",
}

// console.log(as["name"]);
// console.log(as["location"]);

//accessing the property that does not exist in object will give undefined
as.greeting = function() {
    console.log("hello as");
}

//using this
as.greetingq = function() {
    console.log(`hello js, ${this.age}`)
}

// console.log(as.greeting());
// console.log(as.greetingq());


//how singleton

const tuser = new Object() //- singleton
const tpuser = {} //-non-singleton

// console.log(tuser);
// console.log(tpuser);

const tinderqq ={}

tinderqq.id = "12a";
tinderqq.name = "asd";

const regu = {
    email: "asd",
    ful: {
        userfull:{
            first: "asdas",
            last:"asdadeee"
        }
    }
}

//console.log(regu.ful.userfull.first);


const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"c", 2:"d"}

const obj3 = Object.assign(obj1,obj2); //for object assign there then be more object to merge to use const obj3 = Object.assign({},obj1,obj2,obj3) so here {} will be use as target and every other obj will be treat as source.

console.log(obj3);

const obj31 = {...obj1,...obj2}; // easiet way to merge objs as same as we do it in arry merging.

//for eg in a JSON file we have multiple object

//Object.keys,Object.values,Object.entries

console.log(as.hasOwnProperty('location')); // this function to check if object has the property you are looking for a boolean type

 //destructuring of object

 const course = {
    coursename : "js",
    duration : "6 months",
    fees : "500$"


 }

//  const{coursename} = course
//  console.log(coursename);


 const{coursename:name} = course //destructure of course name
 console.log(name);