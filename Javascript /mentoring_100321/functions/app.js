// functions are Objects!!!!!!

// Define function
/* function myFunction() {
  // body of the function = scope
  console.log("MyFunction is running");
}

// to use this function you have to call it!!!!
myFunction();
myFunction();
myFunction(); */

///////////////////////////////////////////////////////////////////////

// another way to define a function is using arrow function

/*const myFunction1 = () => {// {}===> {scoop}
   const x = 10;
  console.log("MyFunction1 is running");
};
console.log(X) // you cant console.log it because its in the scope!
myFunction1();
myFunction1();
myFunction1(); */

/////////////////////////////////////////////////////////////

/* function myFunction() {
  console.log("myFunction Is running");
  return 20;
}

// myFunction(); // ===> console.log("myFunction Is running")
// console.log(myFunction()); // ===> console.log("myFunction Is running")
//////////////////////////// ===> 20
console.log(myFunction() + 5); // ===> 25 */

//////////////////////////////////////////////////////////////

/* function myFunction1() {
  console.log("myFunction Is running");
  return 20;
}
let z = myFunction1() + myFunction1();
console.log(z); // ===> 40 */

/////////////////////////////////////////////

/* // Arguments === Parameters */
/* function myFunction(a) {
  // as an argument: you can put any data type can javascript understand
  console.log(a);
}

myFunction("text"); // ===> Argument a is this case string "text"
myFunction(1000); // ===> Argument a is in this case Number 1000
myFunction([6, 9, 10, 12]); // Argument a is in this case an Array [6, 9, 10, 12]
myFunction({ name: "Mehmet", age: 33 }); // Argument a is in this case an Object */

/* function myFunction(a, b) {
  console.log(a);
  console.log(b);
}
myFunction(10, "text"); // ===> a= 10
///////////////////////// ===>  b= string "text" */
/* function sum(a, b) {
  return a + b;
}
var x = sum(10, 20 + ""); // string + number = string // ===> string "1020"
var y = sum(sum(10, 30), sum(25, 10)); // ===> a= sum of 10+30 => a= 40 + b= 35 = 75
console.log(y); */

/////////////////////////////////////////////////////////////////////
/* function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

var x = 50;
var y = 10;
const r1 = sum(x, y); // ===> 60
const r2 = sub(x, y); // ===> 40
const r3 = mul(x, y); // ===> 500
const r4 = div(x, y); // ===> 5
const r5 = sub(sum(x, y), 10); // ===> 50
const r6 = mul(sub(100, r2), 2); // ===> 120
const r7 = div(mul(x, sub(y, 5)), 5); // ===> 50

console.log(`r1 ====> ${r1}`);
console.log(`r2 ====> ${r2}`);
console.log(`r3 ====> ${r3}`);
console.log(`r4 ====> ${r4}`);
console.log(`r5 ====> ${r5}`);
console.log(`r6 ====> ${r6}`);
console.log(`r7 ====> ${r7}`); */
