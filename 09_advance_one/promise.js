const { use } = require("react");

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed ")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
            console.log("Async  task 2")
            resolve()
    },1000)
}).then(function(){
    console.log("async 2 is resolved")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "coffee",email:"coffee@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)

})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
        resolve({username:"Swapnilverma",password :"123"});
        }else{
            reject("Error : something went wrong");
        }
        
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("finally run ")
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false;
        if(!error){
        resolve({username:"Aman",password :"123"});
        }else{
            reject("Error : Mr. js -> something went wrong");
        }
        
    },1000)
})

async function consumePromiseFive(){
   const response = await promiseFive
   console.log(response);
}

consumePromiseFive()
