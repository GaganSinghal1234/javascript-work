const name = "gagan"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Gagannn') //now it will become an object in key value pair indexing
console.log(gameName)
///string as object using indexes
console.log(gameName[0]);
console.log(gameName[1]);

console.log(gameName.__proto__);// it look like empty but have multiple value

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('g'));

//// slice
const sub = new String(gameName)
console.log(sub.substring(0, 4))// only positive value
console.log(sub.slice(-5, 4))//can give negetive value to start from reverse

////to remove extra spce from string we use trim()

const newStringOne = "    humble    "
console.log(newStringOne); //    humble    
console.log(newStringOne.trim());//humble

const url = "htidnfoeojofejojojofjojfojeo"

console.log(url.replace('oj', '-'))//one time replace for first one


console.log(url.includes('hti'))//to check h ya nahi

console.log(gameName.split('a'))
