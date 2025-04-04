// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString());




let myTimeStamp = Date.now()

console.log(myTimeStamp);// ak fixed time date se ke kr ab tak ki millisecond
console.log(myCreatedDate.getTime());

//in second
console.log(Math.floor(Date.now() / 1000));//it is the seconds from the fixed time

let newDate = new Date("01-11-2025")

console.log(newDate);
console.log(newDate.getMonth() + 1);//month zero se suru krta h issi liyan
console.log(newDate.getDate());

//`${newDate.getDay()}and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate);


