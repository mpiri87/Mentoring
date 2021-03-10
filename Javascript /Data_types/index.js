//to execute javascript code:
//1- in the browser (front-end)

// console.log("Hello World!"); // you can also open in the terminal >>node index.js
// console.log(document); //this is only in browser!
// console.log(window); // window, document only in browser

// Data Types:
// 1- Numbers
// console.log(300); // ===> yellow in terminal ===> number
console.log(351.6); // ===> 351.6

var x = 0b10110; // only 1, 0 numbers after 0b===> binary number
console.log(x);

var y = 0xff; // only 1 to 9 number and from A to F letters after 0x===> Hex numbers
console.log(y); // ===> 255

var z = "700"; // strings
console.log(z); // Not a Number

// 2- Strings [text]
let t = "This text inside double quotation mark"; // double or single quotation is the same
console.log(t); // white color in console

let b = `This text inside backticks quotation marks`;
console.log(b); // this is also like double or single quotation

// 3- boolean
let boo = true;
console.log(boo); // usualy yellow in terminal; only two values true or false

// 3- Arrays
let ar = [1, 2, 9, 10, "s", false, [5, 2], { name: "Mostafa" }, 33];
console.log(ar[6][0]); // ===> 5
console.log(ar.length); // length is member of all Arrays ===> 9 elements
console.log(ar[ar.length - 1]); // ===> 33

let a = [
  5,
  9,
  6,
  4,
  2,
  3,
  1,
  5,
  7,
  4,
  1,
  2,
  3,
  6,
  5,
  2,
  2,
  3,
  33,
  11,
  254,
  300,
];
// console.log(a.length); // start counting from 1
// console.log(a[21]); // ===> 300
let lastIndex = a.length - 1; // last element
console.log(lastIndex); //
// console.log(a[lastIndex]); // ===> 300
// console.log(a[4 - 3]); // ===> index 1 ===> 9
// console.log(a[a.length - 2]); // [x] x should be always a (INTIGER) number>=0 ===> 254

let arrr = [5, 3, 6, 7, 9];
if (arrr.length % 2 != 0) {
  // there is rest (ungerade)
  console.log(arrr[(arrr.length - 1) / 2]); // ===> 6
}

let arr = [5, 3, 6, 7, 9, 10];
if (arr.length % 2 != 0) {
  // there is rest (gerade)
  console.log(arr[(arr.length - 1) / 2]);
} else {
  console.log(arr[arr.length / 2 - 1], arr[arr.length / 2]); // ===> 6 7
}

// 5- Object
let obj = {
  value1: 50,
  value2: "Text",
  value3: false,
  value4: [2, 5, 6, 4],
  value5: {
    v1: 1,
    v2: 5,
    v3: true,
    v4: "String",
  },
};
console.log(obj.value2);
console.log(obj.value3);
console.log(obj.value5.v2);

// To define a variable :
// 1- DONT START WITH NUMBERS
//var 3t = "" // wrong way
// 2- DONT USE OPERATIONS: like (-,+,*,/,%)
//var cv-r=10 // wrong way
// 3- DONT USE KEYWORD IN JAVASCRIPT (for, case, if, )
//var if = 10 // wrong way

// Recommended way to define a variable is cammel-case
//var userName = "something" // recommended

// way of comments
/* */
var text /* this variable to  ...*/ = 10;

/*
Everything here is commented
another line 
another line
last line
*/

// typeof is very useful tool to tell us the type of the variable
const b1 = false;
console.group(typeof b1); // ===> boolean

let n1 = 100;
console.log(typeof n1); // ===> number

console.log(typeof obj); // ===> object

console.log(typeof arrr); // ===> object

console.log(typeof obj.value3); // ===> boolean

console.log(typeof ar[4]); // ===> string

// any syntax works in nodejs it will work in browser
