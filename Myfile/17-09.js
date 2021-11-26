//#1

let num1 = 10;
let num2 = 20;
num2 = num1;
num2 = 55; //*insert this line
console.log(num1); //num1=?
console.log(num2); //num2=?


//#2

let std1 = { id: 1, name: 'Susan' };
let std2 = { id: 2, name: 'John' };
std2 = std1;
std2.name = 'Peter';
console.log(std1); //std1=?
console.log(std2); //std2=?

console.log(num1 === num2); //num1===num2 ?
console.log(std1 === std2); //std1===std2 ?