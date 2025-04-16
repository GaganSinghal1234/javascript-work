// Imediately invoked function expresssions (iife)

// function chai(){
//     console.log(`DB CONNECTED `);
// }
// chai()

// now this can be imediately execute

(function chai(){
    console.log(`DB CONNECTED `);
})(); // end must
//now it is syntactically correct and can use it , similar to the last arrow function use by parantheses without return 

//()(); //phala function dusra execution , similar to the arrow function

// some time there will be problem because of the global scope pollution , so avoid that pollution we use iife
// iife end is must ;

((name)=>{
    console.log(`hii this is me ${name}`);
})('gagan');
// this is an named iife
// this is an arrow function iife to put the value and give the answer



///////////////////////////////////////////////////////////////

// javascript execution context 
// global execution context //{} // two phase : memory execution phase(all variable name are there),execution phase(variale  with value,and according to the need and function these pahse are created simultaniously)
// function execution context
// eval execution context



