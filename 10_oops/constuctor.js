function user(username, agecount, block){
    this.username = username;
    this.agecount = agecount;
    this.block = block;

    this.greeting = function(){
        console.log(`hello ${this.username}`);
    }

    return this;//{}

}

// const userone =user("sachin", 23, "block1");
// const usertwo =user("ram", 25, "block2");
// console.log(userone);
// now  as we calling userone but it will automatically by the second values.
//  thats why we use new as a constructor that will give new instand

//new

const userone = new user("sachin", 23, "block1");
const usertwo =new user("ram", 25, "block2");
console.log(userone);//it will not depend on return this in the fucntion.

console.log(usertwo.constructor);//user, constuctor anly refer to its own


//// instaceof it is use to check the method is belong to the object or not.
function car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function(){
        return `${this.year} ${this.make} ${this.model}`;
    }
}
const myCar = new car("Toyota", "Camry", 2020);
console.log(myCar.getCarInfo()); // Output: 2020 Toyota Camry
console.log(myCar instanceof car); // Output: true