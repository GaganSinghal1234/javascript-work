let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)//NAN

//"33" => 33
//"33abc"=>NaN
//true => 1; false =>0
//null =>0

//now you can check convert to boolean ,to string.

let value = 3;
let nagValue = -value;
console.log(nagValue);

let str1 = "oom";
let str2 = "hmm"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12 //122
console.log(1 + 2 + "2"); //32


console.log(+true)//1
console.log(+"")//0
//tc39 , mdn to read js 

