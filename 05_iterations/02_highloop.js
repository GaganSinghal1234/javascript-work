//for of

const arr =[1,2,3,4,5];

for (const num of arr) {
       console.log(num);    
}

const greetings ="hello world";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

// maps

const m =new Map()
m.set('in',"india")
m.set('usa',"united states of america")
m.set('cn',"chaina")

console.log(m.get('in'));
console.log(m.size);
console.log(m.delete('in'));
console.log(m);

// loop in map : for of

for (const [key,value]  of m) {
    console.log(key);
    
}

const myObject ={
    'game1':'NFS',
    'game2':'spiderman'
}

  
//the object is not iteratable in this manner
// for (const [key,value]  of myObject) {
//     console.log(key);
    
// }
