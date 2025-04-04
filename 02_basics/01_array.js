// arrays

const myArr =[0,1,2,3,4,5,true,"gagan"]
const myHeros = ["hanuman","shivji"]

const myArr2 = new Array(1,2,3,4);//dont to to write in square bracket here

myArr.push(6)//add in ending of array
myArr.push(7)
myArr.pop()// remove from ending

console.log(myArr);

myArr.unshift(9,0);// give value in starting
myArr.unshift(0);
console.log(myArr)
myArr.shift()//remove one value from starting 
console.log(myArr)

// we can use .include(),.indexof()

console.log(myArr.includes(5));//return true or false
console.log(myArr.indexOf(2));//retrun index if found otherwise -1


// join in array

const newArr =myArr.join();// convert the type of array to string

console.log(myArr);
console.log(newArr);

// +++++++++++++++slice ,splice+++++++++++++++

// slice give the slice part of the array but it does not change the array
// splice give the asked part of the array but it changes the original array by removing the asked part

console.log("A",myArr)
console.log("A",myArr)
const myn1 = myArr.slice(1,3)

console.log("B",myArr)
console.log(myn1);

console.log("C",myArr)
const myn2 =myArr.splice(1,3)
console.log("NOW C",myArr)
console.log(myn2)