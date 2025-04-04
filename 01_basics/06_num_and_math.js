const score = 200

const balance = new Number(100)// it will be number for sure
console.log(balance);
/// convertion

console.log(balance.toString().length)//noe its type is change and we can apply string property
console.log(balance.toFixed(2));//to give value only for float by default 0

//to precise the value use it carefully can do data lose

console.log(balance.toPrecision(1));// give 100 as 1e+2

//to give standard to the number 

const hundreds = 1000000000000000000n
console.log(hundreds.toLocaleString());// to apply comma acc to us
console.log(hundreds.toLocaleString('en-IN'))//in indian manner


/////+++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);//in buit object

console.log(Math.abs(-4));//positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.4));
console.log(Math.max(4, 5, 2, 1));
console.log(Math.min(4, 7, 3, 7, 4, 8));

console.log(Math.random());// always give value between 0 to 1
console.log(Math.random() * 10 + 1);//to use according to need to avoid zero

console.log((Math.random() * 10 + 1).toFixed())// by the help of tofixed can remove the float

const kaam = 10
const jada = 20
console.log(Math.floor(Math.random() * (jada - kaam + 1)) + kaam)// range me find krne ke liyan






