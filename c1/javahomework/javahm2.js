// Java Homework Tuesday 3 February

// Exercise 1

for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// Објаснување: Loop-от завршува затоа што i <= 10 му кажува 
// да наброј бројки што се помали или еднакви на 10.

// Exercise 2

let ages = [12, 15 , 18, 22 , 25, 31, 33, 45]

for(let i = 0; i < ages.length; i++) {
    if (ages[i] > 18) {
        console.log(ages[i]);
    }
}
// Exercise 3
let i = 10;

while (i >= 0) {
  console.log(i);
  i--;
}





// Exercise 4

let prices = [ "55", "66", "77", "99", "100", "120", "130", "140"]

for(let i = 0; i < prices.length; i++) {
    if(prices[i] < 100) {
        console.log(prices[i])
    } if(prices[i] > 100) {
        console.log(prices[i] + " Expensive")
    }
}

// Exercise 5


let role = "user"; 

switch (role) {
  case "admin":
    console.log("You have full access");
    break;
  case "editor":
    console.log("You can edit content");
    break;
  case "user":
    console.log("You can view content");
    break;
  case "guest":
    console.log("Limited access");
    break;
  default:
    console.log("Unknown role");
    break;
}