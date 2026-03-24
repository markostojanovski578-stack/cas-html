// Java Script Homework Friday 6 January

// Exercise 1
function minutesToSeconds(minutes) {
    return minutes * 60;

}

console.log(minutesToSeconds(5));

// Excercise 2

function greetPerson(name) {
    return "Hello " + name;

}

console.log(greetPerson("Marko"));

// Exercise 3

function maxNumber (a, b) {
    if(a > b) {
        return a
    } if(a < b) {
        return b
    } else {
        return a, b
    }

}

console.log(maxNumber(7, 12))

// Exercise 4

function logAndRun(callback) {

  console.log("Event recorded, executing next step...");
  callback();
}

function myAction() {
  console.log("this action is running afterwards");
}

logAndRun(myAction);




// Exercise 5

function createLogger () {
    return function() {
        console.log("Hey, The inner function just ran!");
    };
}

const myLogger = createLogger()

myLogger();