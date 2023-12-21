// promise 1-pending,2-fulfilled,3-rejected

const PromiseOne = new Promise(function(resolve,reject){
    //do async calls
    //db,network
    setTimeout(function(){
        console.log('Task complete');
        resolve() // this is importent to run (.then)
    },1000)
})

PromiseOne.then(function(){
    console.log("It's done!");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 2");
        resolve()
    },1000)
}).then(function(){
    console.log("then part 2");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "abc",city:"dilhy"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "def",city:"delhi"})
        }else{
            reject("Error in getting data")
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(()=>{
    console.log("Caught error");
}).finally(()=>{
    console.log("Finished");
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hesoyam",city:"icandothisallday"})
        }else{
            reject("Error in getting data")
        }
    },1000)
});

async function consumePromise(){
   try {
    const response = await promise5
    console.log("response = ",response);
   } catch (error) {
    console.log(error); 
   }
}

consumePromise()



async function getalluser(){
     try {
     const respose = await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await respose.json()
     console.log(data);
     } catch (error) {
        console.log(error);
     }
}
//getalluser()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()})
.then((data)=>{
    console.log(data);})
.catch((error)=>{
    console.log(error)})


