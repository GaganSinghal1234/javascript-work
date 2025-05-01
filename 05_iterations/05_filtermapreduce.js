//for each will not return any value

// const values = coding.forEach((item)=>{
//     return item
// })

// console.log(values)

// so we use filter to return the value

const myNum = [1, 2, 3, 4, 5, 6]

// const newNum= myNum.filter((num)=>num>4)

// console.log(newNum);

// filter will return the value

//to do the same thing with forEach 

// const newNums =[]

// myNum.forEach((num)=>{
//     if (num >4){
//         newNums.push(num);
//     }

// })

// console.log(newNums);


/////////////////example of filter how we can use it///////////////////

const books = [
    { title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Friction', publilsh: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-firction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book six', genre: 'Firction', publish: 1987, editon: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1986 },
];

let userBooks = books.filter((bk)=>bk.genre==='History')

userBooks = books.filter((bk)=>{return bk.publish >= 2000})

console.log(userBooks);