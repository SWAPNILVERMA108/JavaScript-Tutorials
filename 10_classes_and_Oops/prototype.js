// myName = "Swapnil    "
// let mychannel = "coffee"

// console.log(myName.trim().length)



// let myHero = ["thor","spiderman"]

// let heroPower = {
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower : function(){
//         console.log(`spider power is ${this.spiderman}`)
//     }
// }

// heroPower.swapnil()



// prototype by harry 

// let a = {
//     name: "Swapnil",
//     language: "javaScript"
// };

// let p = {
//     run() {
//         console.log("run");
//     }
// };

// Object.setPrototypeOf(a, p);

// a.run();


// another example of prototype

function person(name){
    this.name = name
}

person.prototype.greet = function(){
    console.log("hello , "+ this.name)
}

const p1 = new person("swapnil")
p1.greet()