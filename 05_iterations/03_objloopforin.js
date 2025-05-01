const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject){
    console.log(key);
}
console.log("keys ki value")

for (const key in myObject){
    console.log(myObject[key]);
}

//or

for (const key in myObject){
    console.log(`${key} this is our key and these are values ${myObject[key]}`);
}

// we can use array by for in loop but we get the index here.