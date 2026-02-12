// Homework Thursday 29 January


// Exercise 1
let book = {
    title: "Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    pages: 750

}

console.log(book.title);

book.year = 1880;

console.log(book)

// Excercise 2

let user = {
  name: "Leo",
  email: "leo@example.com",
  isAdmin: false
};

user.isAdmin= true;

delete user.email 

console.log(user)

// Excercise 3

let student = {
  name: "Maya",
  grades: [14, 16, 18, 15]
};

student.grades.push(17)

student.grades.splice(0, 1)

console.log(student.grades)

console.log(student)

// Part 2 of the homework

// Excercise 1

let numbers = [3, 10, 25, 7, 18, 2];

let biggerNumbers = numbers.filter(n => n > 10)
console.log(biggerNumbers);

// Excercise 2

let prices = [5, 12, 20, 8];

let increasePrice = prices.map(p => p * 1.2 );

console.log(increasePrice)

// Excercise 3

let users = [
  { name: "Nina", age: 32 },
  { name: "Alex", age: 19 },
  { name: "Tom", age: 25 },
  { name: "Eva", age: 41 }
];


let found = users.find(u => u.name === "Tom");
console.log(found);

let ageSorted= users.sort((a, b)=> a.age - b.age );

console.log(ageSorted);


