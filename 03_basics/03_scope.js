//use const and let variable 
//dont use var , dont use variable without type 

// {
//     block scope
// }



// global scope all

/// browser global scope is different from node global scope


function one(){
    const username ="gagan";
    function two (){
        const website ="yoout";
        console.log(username);

    }
    two();
}
one();



if (true){
    const username ="gagan";
    if(username === "gagan"){
        const website ="routout";
        console.log(username , website);
    }
    // console.log(website);

}