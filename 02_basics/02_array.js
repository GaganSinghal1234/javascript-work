const marvel_heroes =["thor","Ironman","spiderman"]
const dc_heroes =["superman","flash","batman"]

//++++++++++++ first way+++++++++++++++++++++++

////// marvel_heroes.push(dc_heroes)

////// console.log(marvel_heroes); 

//// now it will take the array in another array 
//to get data from such array we use this

////// console.log(marvel_heroes[3][1]);

//to avoid this problem we use concat

//++++++++++++++++++second way : concat+++++++++++++++++++++

// const allHeroes= marvel_heroes.concat(dc_heroes);//it return a new array
// console.log(allHeroes);

//+++++++++++++++++third way : spread+++++++++++++++++++++++++++++

// const all_new_heroes =[...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

//++++++++++++++++++forth way :flat+++++++++++++++++++++++

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//++++++++++++++++

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"})) // interesting//because we have to specify which thing we have to make array
//either key or value

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

