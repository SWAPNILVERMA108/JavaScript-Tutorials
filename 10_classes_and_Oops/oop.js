//const { use } = require("react")

const user={
    userName: "Swapnil",
    loginCount:8,
    signIn:true,

}
//     getUserDetails: function(){
//         //console.log("Got user details from database")
//         // console.log(`UserName :  ${this.userName}`)
//         console.log(this)
//     }
// }

// console.log(user.userName)
// console.log(user.getUserDetails())


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const UserOne =new User("Aman", 12,true)
const UserTwo =new User("swapnil",11,false)

console.log(UserOne)
console.log(UserTwo)