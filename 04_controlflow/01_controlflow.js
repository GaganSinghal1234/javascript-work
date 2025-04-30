// if

// if(true / false){

// }

// we just check the basic condition and do the comparision

// < , > , <= , >= , == , != , === , !==


// switch

// switch(key){
//     case value:

//     break;

//     default:
//         break;

// }

const month =3

switch (month){
    case 1:
        console.log(`jen`);
        break;

    case 2:
        console.log(`feb`);
        break;
            
    case 3:
        console.log(`march`);
        break;

    default:
        console.log("default case match");
         break;


}

///////////////////////////////////////////
///  truethy or falsey value
const userEmail = "ji"; // "ji" is true, "" false,[]true,

if(userEmail){
    console.log("got user email");

}
else{
    console.log("Dont get");
}

//falsy value: 
// false , 0,-0,BigINT 0n.null,null,undefined,NAN.""

//truthy value:
// "0","false"," ",[],{},function(){}

// so to check array 
const useraEmail=[];
if(useraEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object")
}


// NUllish coalescing operator (??): null undefined

let val1;// it is use the manage the code wen value are comming from backend
val1 = 5??10;//5
val2 = null?? 10; //10
val3 = undefined ?? 10; //10


console.log(val1);

// terniary operator

//condition ? true : false