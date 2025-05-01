const coding =["js","ruby","java","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })



function printMe(item){
    console.log(item);
    
}    

coding.forEach(printMe);

coding.forEach( (item,index,arr)=>{
        console.log(item,index,arr);
     });


//[{},{},{}] we use these type of array by for each

const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"

    },
    {
        languageName:"java",
        languageFileName:"java"

    },
    {
        languageName:"python",
        languageFileName:"py"

    }
]



myCoding.forEach((item)=>{
    console.log(item.languageName);
})

