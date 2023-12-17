function add(num1,num2) {
    return num1+num2
}
result = add(5, 7);

//function with obj

//shopping cart can add multipe items

function calculatecart(...num11) {
    /// ...num1 = rest opertor can take multipe input and will return array
    return num11
}

console.log(calculatecart(100,200,300));

function calculatecart1(va1,val2,...num121) {
    /// ...num1 = rest opertor can take multipe input and will return array
    return num121
}

console.log(calculatecart1(100,200,500,1000)); // 100,200 will be val1,val2 and others will go in arry of num121

const user={
    name:"John",
    age:30,
}

function obj(anyobj){

    console.log(`username is : ${anyobj.name}`);
}

obj(user) //passing single obj ref
obj({   //passing obj
    name:"John",
    agea:30,
})

const myarr = [1,2,3,4,5]

//array passing
function returnarr(getarr) {
    return getarr[1]
}
console.log(returnarr(myarr));