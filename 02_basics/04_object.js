// cosnt tinderUser =new Object(); singleton
const tinderUser = {}; // non singleton

tinderUser.id = "123abc"
tinderUser.name = "gagan"
tinderUser.isLoggedIn = false


console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// we use it with ternory operator

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3={obj1,obj2}//wrong practise
const obj3 = Object.assign({}, obj1, obj2)// first is target and else all are source or  no data loose from any array
console.log(obj3);

const obj4 = { ...obj1, ...obj2 }
console.log(obj4);
console.log("hii")

// jab database se value aayegi

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {

    },
    {

    },
    {

    }
]

console.log(users[0].email);//asse print krna h
console.log(tinderUser);
console.log(Object.keys(tinderUser));
//now you can do anything with data here
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));