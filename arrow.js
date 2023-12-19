const usera = {
    user: "asbd",
    price: 22,
    age: 2,

    welcomemessage: function() {

        console.log(`welcome to muther, ${this.user}`);
        console.log(this);
        
    }
}

// usera.welcomemessage()
// usera.user = "lolu"  // created new context for this same user
// usera.welcomemessage()


//console.log(this); will show empty {} because it is looking inside global context and its empty.
// while on browser level terminal it(this) will show this.window prototype which contain multiple options access.

// function chai() {
//     let color = 'red';
//     console.log(this.color);
// }
//when we try to access something to this inside from function i cannot access, it can only be access through object.
//chai()

const chai =  () => {
    let username = "sasa"
    console.log(this);
}

//chai()


//Explicit return arrow fun

// const addtwo = (num1, num2) => {
//     return num1+num2
// }

// implicite return arrow fun
// const addtow = (num1,num2) => (num1 + num2)

// return obj in arrow
const person = (name ,age )=> ({ name : name , age : age })

console.log(person("a",3));

