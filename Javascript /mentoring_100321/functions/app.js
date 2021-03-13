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

// 130321 Mentoring MOstafa

/* Define a function which will take name a string as an argument, and it will return nothing
 * it shoul only console.log Hello "the name as we pass it as an argument"
 * EX: Hello Memet
 */

/* function hallo(name) {
  // void function "return nothing" no return
  console.log(`Hello ${name}`);
}

hallo("Mehmet");
hallo("Mostafa");

/**
 * This Function To return Sum of Values.
 * @author Memet
 * @param {Number} a as a number // it take a as a arguments
 * @param {Number} b as a number
 * @returns {Number} sum a and b
 */
/* function sum(a, b) {
  return a + b;
}

let x = sum(6, 4);
console.log(x); */

/**
 * This variable is important for me
 * test test
 */
// const someVar = "normal text";

// 6  7   10  ====> 23/3
/* function durchschnitt() {
  // arguments is a keyword inside a function it will read all arguments and put it inside an array
  sum = 0;
  for (i = 0; i < arguments.length; i++) {
    console.log("i ist:" + i);
    console.log("dann value ist: " + arguments[i]);
    sum += arguments[i];
  }

  // console.log(arguments)
  // return (a + b + c) / 3;
  return sum / arguments.length;
}
console.log(durchschnitt(6, 7, 8, 10, 2, 6, 2)); */

/* function avarage() {
  sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum / arguments.length;
}
console.log(avarage(5, 6, 7, 8, 9, 100)); */

// check only number
function avarage() {
  sum = 0;
  let zahlenCount = arguments.length;
  for (i = 0; i < arguments.length; i++) {
    console.log(
      `i is: "${i}",and value is: "${
        arguments[i]
      }", und Type of this element ist: ${typeof arguments[i]} `
    );
    // typeof "variable" ===> typeof this variable as a string result
    if (typeof arguments[i] === "number") {
      sum += arguments[i];
    } else {
      zahlenCount--;
    }
  }

  return sum / zahlenCount;
}
console.log(avarage(5, 6, "g", 8, 9, 100, "d")); // ===> object as a string

function argumentsAnalyser() {
  let countOfNumbers = 0;
  let countOfStrings = 0;
  let countOfObjects = 0;
  let countOfBooleans = 0;

  for (i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      countOfNumbers++;
    } else if (typeof arguments[i] === "string") {
      countOfStrings++;
    } else if (typeof arguments[i] === "object") {
      countOfObjects++;
    } else {
      countOfBooleans++;
    }
  }
  return {
    countOfNumbers: countOfNumbers,
    countOfStrings: countOfStrings,
    countOfObjects: countOfObjects,
    countOfBooleans: countOfBooleans,
  };
}

console.log(
  argumentsAnalyser(
    4,
    5,
    8,
    "sfgh",
    true,
    [3, 5, 8],
    { l: "g" },
    false,
    40,
    "dfgj"
  )
);

console.log(argumentsAnalyser(2));

// to read all arguments inside a function use "arguments" ===>[]
