const name = "swapnil verma"
const repoCount = 50

//console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String("swappy")
console.log(gameName[0])
console.log(gameName[3])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf("a"))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(0,3)
console.log(anotherString
    
)

const newString1 = "       swapnil       "
console.log(newString1.trim())

let url = "google.com"
let up =url.replace(".","**")
console.log(url)
console.log(up)
console.log(url.includes("com"))