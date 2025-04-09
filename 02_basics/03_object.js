// singleton:constructor se bna hua object
//constuctor //Object.create isse use kr ke bantan h  

//object literals:without constructor 

//bahut jsruribaat suna tha na symbol unique hote tho object m unhe unqiue tarhe se hi use kiya jata

const mySys = Symbol("key1")//symbol in object [], no dot no sting neeed
// agar direct use kiya tho string ke tarha hi hoga 

const jsUser ={
    name:"Hitesh",
    age:18,
    //mySys:"mykey1", ye h string
    [mySys]:"myKey1",
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"],
    "humhihum":323232,//isse hm ab . se nahi bual sakte

}

console.log(jsUser.email)
console.log(jsUser["email"])//isme key call kerte time batana padhega sab bigbreasket or string type
console.log(jsUser["humhihum"])//ab ye asse hi possible h ab dot se nahi bula sakte
console.log(jsUser[mySys])//ab ye symbol h or unique hi rahega

jsUser.email = "hitesh@chatgpt.com"
//Object.freeze(jsUser)//ab koi change nahi ho sakta 
jsUser.email ="hitesh12@chatgpt.com"
console.log(jsUser.email)

jsUser.greeting = function(){
    console.log("hello js")
}
console.log(jsUser.greeting);//tell us about functional overview
console.log(jsUser.greeting());//give value

///////

jsUser.greetingTwo =function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(jsUser.greetingTwo());
