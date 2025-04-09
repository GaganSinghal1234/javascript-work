//destructuring of objects

const course ={
    coursename: "js by gagan",
    price: "999",
    courseInstructor: "hitesh"

}
//course.courseInstructor
// make it easier we define it as the value of it 
const {courseInstructor}=course
console.log(courseInstructor);
//or agar tumhe lage ye bada naam h
const{courseInstructor:instructor}=course
console.log(instructor);


//// this is use in react ok
// ++++++++++++++
// const navbar =(props.company) => {

// }
// navbar(company ="hitesh")

// const navbar =({company})=>{

// }
// navbar(company="hitesh")
// console.log(typeof(navbar));
// ++++++++++++++++++++++++++++++++++

//////////////////api json///////////////////

// {
//     name:"hitesh",
//     coursename:"js by gagan",
//     price:"free"
// }
//these thing give error because they are simalr as object but not the object because object has name
// to avoid this ve only use sting both side
// {
//     "name":"hitesh",
//     "coursename":"js by gagan",
//     "price":"free"
// }
//correct