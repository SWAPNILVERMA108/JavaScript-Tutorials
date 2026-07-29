function setUserName(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    setUserName.call(username)
    this.email = email
    this.password=password
}

const coffee = new createUser("coffee","coffee@123.com",231)
console.log(coffee)

