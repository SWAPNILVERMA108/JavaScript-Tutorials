// for of 

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num)
    
}

// maps 

const map = new Map();
map.set("IN","India");
map.set("US","America");

//console.log(map)

for (const [key,value] of map) {
    console.log(key,"=>",value)
    
}



// for in loop work in object and array both