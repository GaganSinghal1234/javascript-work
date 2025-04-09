function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");


}
// sayMyName this is reference used in react while onclick
sayMyName();

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);

// } // after this the result is undefined because of console not return anything
//addTwoNumbers(3,null);//arguments

function addTwoNumbers(number1,number2){
    let pin=number1+number2;
    console.log(pin);
    return pin;
    //return number1+number2
}

const result = addTwoNumbers(3,2);
console.log("result me kya save hua  ", result);



function loginUserMessage(username="sameer"){
    if(username === undefined){ // if(!username) undefined yaha pr -ve ki tarha treet hota
        console.log("please enter a username");
        return
}
    return`${username} just logged in`
}

console.log(loginUserMessage());// agar gagan ki jagha kuch na diya ho tho undefined