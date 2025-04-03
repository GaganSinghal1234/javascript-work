// Primitive data type

// 7 types : String, Number ,Boolean, null, undefined, Symbol,BigInt

const score = false
//const set:Boolean=false;//typescript

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);//it will give false because symbol have unique value

const num = 5165161616191166n;//it will automatically bigint by n




//Reference (Non primitive)

//Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];


let myObj ={
    name: "gagan",
        age: 22,
}

const myFunction =function(){
    console.log("Hellow world");
}  /// all non premitive has a data type object and fuction object
//type of null is object......