const coding =["js","java","cpp","python","ruby"];

// coding.forEach(function(val){
//     console.log(val)
// })


// or

// coding.forEach((val)=>{
//     console.log(val);
    
    
// })

//or 

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


// with more parameter

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


const myCoding = [{
    languageName: "javascript",
    languageFileName:"js"
    },
    {
    languageName: "java",
    languageFileName:"java"
    },
    {
    languageName: "cpp",
    languageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})

