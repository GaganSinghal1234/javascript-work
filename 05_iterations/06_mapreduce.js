const myNumbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// to do same operation for every element in the array we can use map method
// map will return the value
let newNums = myNumbers.map((num)=>{return num +10})
console.log(newNums);

newNums = myNumbers.map((num)=>num *10)
                   .map((num)=>num + 1)
                   .filter((num)=>num > 50);

console.log(newNums);    

///// reduce method ////////////
// reduce method will return a single value
// reduce method will take two parameters 1st is accumulator and 2nd is current value
// accumulator is the value that we are going to return
// current value is the value that we are going to iterate over

const array1 =[1,2,3,4,5,6,7,8,9,10]
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
     initialValue
    );

    console.log(sumWithInitial); //55

const mynu=[1,2,3,4,5,6,7,8,9,10]
const myTotal = mynu.reduce((acc, curr)=>{  return acc+curr},0)
console.log(myTotal); //55

const shoppingCart =[
    {itemName:"apple", price: 10, quantity: 2},
    {itemName:"banana", price: 5, quantity: 3},
    {itemName:"orange", price: 8, quantity: 4},
    {itemName:"grape", price: 12, quantity: 1},
]
const totelvalue = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totelvalue); //35
