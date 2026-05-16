// Objects

//  let user = {
//      name: "Marko",
//     age:  24,
//     isMember: true  }


// console.log (user);
// console.log (user.name);
// console.log (user.age);
// console.log (user.isMember);

// // Втора варијанта
// console.log(user["name"]);

// // changing objects

// user.age= 33;
// user.isMember= false
// console.log(user);

// adding properties

// user.email= "markos@gmail.com";
// console.log(user);



// let movie = {
//     title: "Barry Lyndon",
//     year: 1982,
//     rating:  8

    
// }

// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rating);

// let product = {
//     name: "Colgate",
//     price: 120,
//     inStock: true


// }

// product.price = 140;
// product.instock= false;

// console.log(product)

// nested objects

// let student = {
//     name: "Mark",
//     grades: {
//         math: 80,
//         physics: 55
//     }


// }

// console.log(student)
// console.log(student.grades.math)


// let car = {
//     name: "BMW",
//     engine: {
//         type: "V8",
//         horsePower: 1578
//     }
// }


// Arrays

// let color = ["red", "green", "blue", "black", "violet", "orange"];

// console.log(color);

// console.log(color[0])

// color[1]= "yellow"; 
// console.log(color)

// console.log(color.length);
// console.log(color.[2]);
// console.log(color.[color.length-1]);


// let numbers = [10, 20, 30]
// console.log(numbers[0])
// console.log(numbers[color.length-1])

// numbers[1]= 25; 
// console.log(numbers);
// 

// let fruits 

// shift removes from the beginning
// fruits.shift

// splice: remove or insert anywhere

// slice: copy part of an array

// let animals= ["cat", "dog", "pigeon"];
// animals.splice(1, 1);
// console.log(animals)

// let tasks= ["run", "lift", "jump"]
// tasks.push("swim");
// tasks.shift();
// tasks.splice (1, 1);

// let tasks_copy= tasks.slice(0, 2);
// console.log(tasks_copy);

// arrays and objects together

// let playLists= {
//     name: "Favorites",
//     songs: ["Sunshower", "TLC", "Never Enough"]
// }

// console.log(playLists);
// console.log(playLists.songs[0]);

// playLists.songs.push("Sole");
// console.log(playLists);


// let movies= [
//     {name: "Pulp Fiction", year: 1998},
//     {name: "2001 Space Odyssey", year: 1994},

// ]

// console.log(movies);
// console.log(movies[0].name);

// let names= ["Charlie", "Nick", "Mark"]
// names.sort()
// console.log(names)

// let numbers= [5, 7, 8];
// numbers.sort( (a, b) => a - b);
// console.log(numbers);

// how to sort numbers


//  let numbers= [1, 2, 3, 4, 5, 6];
//  let evenNumbers= numbers.filter(n => n % 2 === 0);


//  let strings= ["apples", "figs", "banana", "potato"];
//  let longWords= strings.filter(s => s.length > 4);
//  console.log(longWords);

// Sort by age

// let users = [
//     {name: "Eva", age: 17},
//     {name: "Mark", age: 22},
//     {name: "Nina", age:15}
// ]

// users.sort( (a, b) => a.age - b.age );
// console.log(users);

// let numbers = [10, 20, 55, 80 ];
// let found = numbers.find(n => n > 50);
// console.log(found);


// let users = [
//     {name: "Ana"},
//     {name: "Leo"},
//     {name: "Mia"}
// ]

// let userFound= users.find( u => u.name === "Leo");
// console.log(userFound);

// Map

// let numbers= [1, 2, 3];
// let doubledNumbers= numbers.map(n => n * 2);
// console.log(doubledNumbers);

// let prices = [10, 20, 30]
// let withTax= prices.map (p => p * 1.2);
// console.log(withTax);

