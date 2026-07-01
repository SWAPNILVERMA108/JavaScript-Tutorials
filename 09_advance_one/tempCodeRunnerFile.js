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
})
