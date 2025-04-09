function calculateCartPrice(...num1){//... rest operator
    return num1;//give an array that bundel all the value
}
calculateCartPrice(200,300,400,5000)
//... spread according to use 


/// objects in function

const ram = {
    username:"ram ji",
    rank:"1"
}
function test(anyobject){
    return `this is the name ${anyobject.username} and the rank is ${anyobject.rank}`
}
console.log(test(ram));

// can also give direct object to the function 

/////using function with array

const arr=[200,400,3000,500];
function second(getarr){
    return getarr[2];
}
console.log(second(arr));