// Primitive data types
// String, Number, Boolean, Symbol

// Scope

// 1. Global scope -  var let const
// 2. Function - var
// 3. Block - const, let

// var test = 1; //Global scope
// var logic = false;
// const testOne = "Test one";//Global scope
// let testTwo = "test two";//Global scope

// const MAX_NUMBER = 999; //Usage in a for cycle


// for(let i = 0; i < MAX_NUMBER; i++) {
//     console.log("I go to MAX Number");
// }

// console.log(test)


// true
// false

// function scopeTest() {
//     // Function scope
//     if(true) {
//         // Block scope
//         var name = "John";
//         const surname = "Doe"
//     let age = 25;
//     console.log("Name, Surname, Age: ", name , surname, age);

//     }
    
//     console.log("Name: function scope", name)
// };


// scopeTest();

// // Conditionals

// const testVar = false;
// const varTest = true;

// if(!testVar) {
//     console.log("NOT");
// }

// if(testVar || varTest) {
//     //  0 0 - false
//     //  0 1 - true
//     //  1 0 - true
//     //  1 1 - true
//     console.log("OR");
// }

// if(testVar && varTest) {
//     // false false - false
//     //  false true - false
//     // true false - false
//     //  true true - true
//     console.log("AND")
// }

// if((testVar && !varTest) || (!testVar && varTest)) {
//     console.log("XOR")
// }

// // const myName = "John";
// // myName = "Jane";

// // console.log(myName);

// // let mySurname = "Doe";
// // mySurname = "Test";

// // console.log(mySurname);


// // person is an object
// // firstname is a key
// // john is a value
// // ova vazhi za site
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 20,
//     address: "BUL 123"
// };

// person.age = "25";

// // console.log("Person age", person.age)

// // console.log(`Dot notation`,person.address);
// // console.log("Bracket notation: ", person["address"]);

// function greetMe(key) {
//     // key = "firstname"
//     // person["firstname"]
//     console.log(`${key}`,person[key]);

// }

// greetMe("lastname");

// const keyAddress = "address";

// console.log("Person address", person[keyAddress]);

// Array 


// console.log("Arrays starts from zero: ", numbers[0]);
// console.log(numbers.length); 


// function testFun(num) {
//     return num;
// }

// const testArrow = (num) => num;
// const testReturnArrow = (num) => {
//     return num;
// };

// for(let i = 0; i < 5; i++) {
    // console.log(testFun(i));
    // console.log(testArrow(i));
    //  console.log(testReturnArrow(i));
// }


// = initialization
// == comparisson
// === comparison with value and type
// const numbers = [55, 24, 120, 42, 123];

// const findOdd = numbers.find((num) => num % 2 !== 0) ;
// console.log(`Odd number`, find0dd);


// const newNumbers = numbers.map((num) => num * 2); //Returns a new array mapped from the original one

console.log("hello")

const calculator = require("./calculator"); //Core module
const stosakam = require("./calculator"); //Local module

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 26
};

greetMe(person.firstname);
