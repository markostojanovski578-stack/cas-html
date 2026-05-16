// Functions

// function sayHello() {
//     console.log("Hello");
// }

// sayHello(); 

// // Functions with parameters

// function sayGoodbye(name) {
//     console.log("Goodbye " + name);
// }

// sayGoodbye("Marko");
// sayGoodbye("Ana");
// sayGoodbye("Petar");


// function introduce(firstName, age) {
//     console.log("My name is " + firstName)
//     console.log("I am " + age + " years old")
// }

// introduce("Marko Stojanovski", 24)


// // Returning values



// function add(a, b) {
//     return a + b;
//     console.log("I will not be executed");
// }

// let result = add(5, 3);
// console.log(result);




// function multiply(a, b, c) {
//     return a * b * c
//     console.log("I will not be executed") 
// }

// // После ретурн завршува функцијата конзол логот не се изведува.

// let result1=multiply(18, 4, 10);
// console.log(result1);


// Exercise 1

// function multiply(a, b, c, d) {
//     return a * b * c * d 
// }

// let result= multiply(18, 5, 22, 12)
// console.log(result)


// function fullname (firstName, lastName) {
//     return firstName + " " + lastName
// }

// let fullString= fullname("Marko", "Stojanovski")
// console.log(fullString)

// Function expressions

// const sayHi = function() {
//     console.log("Hi");
// }

// sayHi("");

// /////////////////////////////////////////////////////////////// yt tutorial

// function happyBirthday(username, age) {
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}`);
//     console.log("Happy Birthday to you!");
//     console.log(`You are ${age} years old`);
// }


// happyBirthday("Marko", 25);
// happyBirthday("Ana", 44)

// `` - gi koristime ovie za da mozheme vo consolot logot da stavime ${username} i ${age}
// dodeka tekstot ti e vo "" nemozhesh da stavish user i age


// Podolga verzija

// function add(x, y) {
//     let result = x + y;
//     return result;


// }

// let answer=add(2, 3);
// console.log(answer);

// Pokratka verzija
// function multiply (a, b) {
//     return a * b;

// }

// let result1 = multiply(2, 7);
// console.log(result1);

// Najkratka verzija

// function add(a, b) {
//     return a - b;
// }


// console.log(add(5, 2));

// function add (x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;

// }

// function multiply(x, y) {
//     return x * y;
// }

// function divide (x, y) {
//       return x / y;
// }


// console.log(divide(12, 6))
// console.log(add(9, 19))
// console.log(multiply(5, 22))
// console.log(subtract(199, 55))

// Podolga verzija 

// function isEven(number) {
//     if(number % 2 === 0) {
//         return true;

//     } 
//     else{
//         return false;
//     }
// }

// console.log(isEven(5))

// Pokratka verzija

// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(7))


// Podolga verzija

// function emailValid (email) {

//     if(email.includes("@")) {
//         return true;

//     }

//     else {
//         return false;
//     }

// }

// console.log(emailValid("bro@fake.com"))
// console.log(emailValid("elomusk.com"))
// console.log(emailValid("zuckerberg@meta.com"))

// Pokratka verzija

// function emailValid (email) {

//     return email.includes("@") ? true: false;

// }

// console.log(emailValid("bro@fake.com"))
// console.log(emailValid("elomusk.com"))

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square)
// console.log(squares);
// function square(element){
//     return Math.pow(element, 2);
// }


// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0
// })

// console.log(evenNums)

// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0
// })

// console.log(oddNums);

    


// const hello = function () {
//     console.log("Hello")
// }

// hello();

// const hello = (name,age) => {console.log(`Hello ${name}`)
//                          console.log(`You are ${age} years old`) };

// hello("bro", 25);

// so arrow prodolzhuvam utre