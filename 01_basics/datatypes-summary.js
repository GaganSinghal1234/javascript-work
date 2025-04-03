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



///++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory allocation in js

// Stake(Primitive), Heap(Non-Primitive)

let hum ="humsub"
let we =hum
we ="sare log"
console.log(hum);//diff because of copy is change not the original
console.log(we);//diff because of copy is change not the original

let userOne ={
    email:"govida@google.com",
    name:"govida"

}
let printO =userOne

printO.email="ranvir@google.com"
console.log(userOne.email)// dono hi same honge refrence h issliyan original change
console.log(printO.email)//dono hi same honge refrence h issliyan original change




