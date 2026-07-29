class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;


    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const coffee = new user("coffee","coffee@gmail.com",1234)

console.log(coffee.changeUsername())
console.log(coffee.encryptPassword())


// behind the scene

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
