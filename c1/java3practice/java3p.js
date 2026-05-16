// Objects

// let user = {
//     name: "Marko",
//     age: 24,
//     height: 182
// }

// console.log(user.name)
// console.log(user.age)
// console.log(user.height)

// Changing objects

// user.age = 33;
// user.name = "Stefan";
// console.log(user.age)
// console.log(user.name)

// Adding new properties

// user.email = "markostojanovski@gmail.com";
// console.log(user.email)


// Exercise 1

// let movie = {
//     name: "Shutter Island",
//     rating: 8,
//     year: 2008
// }

// console.log(movie.name)
// console.log(movie.rating)
// console.log(movie.year)

// Exercise 2

// let product = {
//     name: "Oreo",
//     inStock: true,
//     price: 200
// }

// console.log(product.name)
// console.log(product.inStock)
// console.log(product.price)


// product.name = "Gorska";
// product.inStock = false;
// product.price = 70;

// console.log(product.name)
// console.log(product.inStock)
// console.log(product.price)

// Nested objects

// let student = {
//     name: "Mark",
//     grades: {
//         math: 90,
//         science: 65
//     }
// }

// console.log(student.grades.math)
// console.log(student.grades.science)

// Excercise 1

// let car = {
//     name: "Honda",
//     engine: {
//         type: "V12",
//         horsePower: 320
//     }
// }

// console.log(car.engine.horsePower)


// car.engine.horsePower= 450;

// console.log(car.engine.horsePower)

// Arrays

// let colors = ["green", "red", "blue", "magenta", "yellow", "black"]
// console.log(colors);
// console.log(colors[0]);
// console.log(colors[4]);
// console.log(colors[2]);

// colors[1]= "cyan";
// console.log(colors)
// console.log(colors.length)
// console.log(colors.length-1)

// Excercise 1

// let numbers = [10,20,30];
// console.log(numbers[0]);
// console.log(numbers[numbers.length-1])


// numbers[1]= 25;
// console.log(numbers[1])

// Array Methods

// push: add to the end 

// let fruits = ["apple","banana"];
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);

// pop: remove from the end

// fruits.pop();
// console.log(fruits)

// unshift: add to the beginning

// fruits.unshift("lime");
// console.log(fruits);

// shift: remove from the beginning

// fruits.shift();
// console.log(fruits)

// splice: remove OR insert anywhere 

// let animals = ["cat", "dog", "bird"];
// animals.splice(1, 1);
// console.log(animals);
// animals.splice(1, 0, "rabbit");
// console.log(animals);

// // slice: copy part of an array

// let animals_copy = animals.slice(0,2);
// console.log(animals_copy);


// EXERCISE 1: Create an array called tasks that has four tasks. Add one task. Remove one task.
// EXERCISE 2: Remove the second task from the array. Create a copy of the first two.

// let tasks = ["work","study", "run", "cook"];
// tasks.pop();
// console.log(tasks)
// tasks.push("clean");
// console.log(tasks)
// tasks.splice(1,1);
// console.log(tasks)

// let tasks_copy = tasks.slice(0,2);
// console.log(tasks_copy);

// Objects and Arrays together


// let playlist = {
//     name: "My Playlist",
//     songs: ["Blue","Ghetto Kraviz","Slide"]
// } ;

// console.log(playlist.songs[0])

// playlist.songs.push("The Color Violet");
// console.log(playlist)

// let movies = [
//     {name: "Pulp Fiction", year: 1994},
//     {name: "Citizen", year: 1940},
// ];

// console.log(movies[0]);


// Sort
// let names = ["Charlie", "Alice", "Bob"];
// names.sort();
// console.log(names);


// let numbers = [2, 10, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers);


// Filter
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(n => n % 2 === 0);
// console.log(evenNumbers);

// let strings = ["apple", "fig", "banana", "pear"];
// let longWords = strings.filter(s => s.length > 4);
// console.log(longWords);


// let people = [
//     {name: "Eva", age: 17},
//     {name: "Mark", age: 22},
//     {name: "Nina", age: 15}
// ];

// let adults = people.filter(person => person.age >= 18);
// console.log(adults);

// Find

// let numbers = [3, 7, 10, 20];
// let result = numbers.find(n => n > 8);
// console.log(result);

// EXERCISE 1: Sort the users by age.
// EXERCISE 2: Find the number greater than 50
// EXERCISE 3: Find the user named "Leo"

// let users = [
//     { name: "Eva", age: 28 },
//     { name: "Mark", age: 21 },
//     { name: "Nina", age: 35 }
// ];

// users.sort((a, b) => a.age - b.age);
// console.log(users);

// let numbers = [10, 20, 55, 80];
// let found = numbers.find(n => n > 50);
// console.log(found);

// let users = [
//     { name: "Ana" },
//     { name: "Leo" },
//     { name: "Mia" }
// ];

// let userFound = users.find(u => u.name === "Leo");
// console.log(userFound);

// Map

// let numbers = [1, 2, 3];
// let doubledNumbers = numbers.map(n => n * 2);

// console.log(doubledNumbers);

// let prices = [10, 20, 30];
// let withTax = prices.map(p => p * 1.2);
// console.log(withTax);

// let users = [
//     {name: "Ana", age: 28},
//     {name: "Leo", age: 21}
// ];

// let names = users.map(user => user.name);
// console.log(names);

// let ages = users.map(a => a.age);
// console.log(ages);