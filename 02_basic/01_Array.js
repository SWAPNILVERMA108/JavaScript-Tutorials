const myArray=[0,2,5,6 ,7,8,9,true,"hitesh"]  
console.log(myArray[3])


const myArr2 = new Array(1,2,3,4)



myArr2.push(3);



// part 2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)


//only two array can merge

newHero = marvel_heros.concat(dc_heros)
console.log(newHero)

// multiple array merge 
 const allHero = [...marvel_heros,...dc_heros]
 console.log(allHero)

 console.log(Array.from("swapnil"))