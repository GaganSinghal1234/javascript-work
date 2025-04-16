const user ={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this) //it will give the current context
    }

}

//user.welcomeMessage // it will not give any thing because it is a function here

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage()// not according to the context change

console.log(this) // it will only give the {} output

// in function we can't access variable using 'this' keyword but can use in object

// function  chai(){
//     let username ="hitesh"
//     console.log(this.username);//we can't use this in this manner in function, only use in object
// }

//chai();

//arrow function

// const chai = ()=>{
//     let username = "hitesh"
//     console.log(this.username);//we can use it in this manner
// }
// chai();


// const addTwo =(num1,num2)=>{
//     return num1+num2
// }

// const addTwo =(num1+num2)=>num1+num2 

const addTwo = (num1,num2) => (num1+num2) //no need to right return

console.log(addTwo(3,4));

//const myArray =[2,4,3,5]
//myArray.forEach(()=() or ()={} or function(){})


