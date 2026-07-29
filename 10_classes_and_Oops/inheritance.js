class user{
    constructor(username){
        this.username=username;

    }
    logMe(){
        console.log(`username is ${this.username}`);

    }
}   

class Teacher extends user{
    constructor(username,email,password) {
        super(username)
        this.email=email;
        this.password=password
    }

    addCourse(){
        console.log(`new course added ${this.username}`)

    }
}

const chai = new Teacher("coffee","coffee@gmail.com",1234321)

chai.addCourse()
const blackCoffee = new user("masala chai")

blackCoffee.logMe()

console.log(chai === blackCoffee)

