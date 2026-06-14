const coding =["java","js","cpp","python"]

const value = coding.forEach((item)=>{
    console.log(item);
    return item
}) 

console.log(value)


const num = [1,2,4,3,5,6,7,8,9]

const newNum =num.filter((nu)=>
    nu>4
)

console.log(newNum)

// Note : if you use {} in filter function then you need to use return keyword


// reduce fuction 

