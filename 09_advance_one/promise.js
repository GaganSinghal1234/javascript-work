// fetch('https://something.com').then().catch().finnaly(); 
// // this is the way we consume the promise but first we have to understand how to make the promises

//making promises
// as promise is an object so we use the constructor(method) to create a promise
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task:  DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is complete')
        resolve() // this is the way  to connect it with then and resolve the promise
    }, 1000);
});

promiseOne.then(function () {
    console.log('promise consumed')
});

//aksath

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task second is complete')
        resolve() // this is the way  to connect it with then and resolve the promise
    }, 1000)
}).then(function () {
    console.log('promise second done')
})


//data dalte hue

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "chai as the paremeter of user go to function", email:"chai@example.com"})
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user.username)
    console.log('promise three done');
})

// with error

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false;
       if(!error){
              resolve({username:"gagan singhal", email:"gagangagan@gmail.com"});
              console.log("no error");
       }
       else{
                reject("error: something went wrong");
       }
    },1000)

})
promiseFour.then(function(user){
    console.log(user.username,user.email);

}).catch(function(err){
    console.log(err);
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"gagan singhal", email:"gagansinghal@gmail.com"});
            console.log("no error");
        }
        else{
            reject("error: something went wrong");
        }
    },1000)
})

promiseFive.then(function(user){
    console.log(user);
    return user.username; // this will be passed to the next then //imp
}).then(function(username){
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("finally"));

//asnyc and await

const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true ; //false;
        if(!error){
            resolve({username:"javascript", code:"console"});
        }
        else{
            reject("error: JS went wrong");
        }

    },1000)
})

async function consumePromiseSix(){
    try{
    const response = await promiseSix;
    console.log(response);
    }catch(err){
        console.log(err);

}
}
consumePromiseSix(); // this will be called first and then the promise will be resolved after 1 sec


async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // this will be called first and then the promise will be resolved after 1 sec
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
getAllUser(); // this will be called first and then the promise will be resolved after 1 sec

// or

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
     return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);

})