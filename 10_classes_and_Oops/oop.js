//const { use } = require("react")

const user={
    userName: "Swapnil",
    loginCount:8,
    signIn:true,


    getUserDetails: function(){
        //console.log("Got user details from database")
        // console.log(`UserName :  ${this.userName}`)
        console.log(this)
    }
}

console.log(user.userName)
console.log(user.getUserDetails())