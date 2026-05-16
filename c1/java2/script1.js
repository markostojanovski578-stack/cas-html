// // if statements
 if(true) {
     console.log ("this is true")
 }

// let age=20;

// if(age >= 18) {
//     console.log ("Adult")
// }


// let temp=30;

// if(temp >= 25) {
//     console.log ("Its warm")
// }


// let speed=140;

// if(speed >= 120) {
//     console.log ("Too fast")
    
// }
// console.log ("Drive safely")


// // if else statements 
// let isRaining= false;

// if(isRaining) {
//     console.log ("Bring an umbrella")
// } else {
//     console.log ("No umbrella needed");
// }


// let isLoggedin= false;

// if(isLoggedin) {
//     console.log ("Welcome back!")
// } else {
//     console.log ("Please log in.");
// }


 let balance=-50;

 if(balance >= 0) {
     console.log ("Account OK")
    
 } else {
     console.log ("Account empty")
 }

// // else if statements

// let score = 85;

// if (score >= 90) {
//     console.log ("Excellent")
// } else if(score >= 70) {
//     console.log ("Good")
// } else {
//     console.log ("Needs improvment")

// }

// // vezhba

// let hour = 14 ;

// if (hour < 12) {
//     console.log ("Good morning")
// } else if(hour < 18) {
//     console.log ("Good afternoon")
// } else {
//     console.log ("Good evening")

// }



// let score2 = 78 ;

// if (score2 < 50) {
//     console.log ("Fail")
// } else if(score2 < 80) {
//     console.log ("Pass")
// } else {
//     console.log ("Excellent")

// }

// // combining conditions with logical operations

// // &&- BOTH CONDITIONS MUST BE TRUE
// // ||- AT LEAST ONE MUST BE TRUE


// let age1=20;
// let hasTicket=true;

// if (age1 >= 18 && hasTicket) {
//     console.log ("You may enter")
// }

// let hasPassword=true;
// let hasUsername=false;

// if (hasPassword && hasUsername ) {
//     console.log ("Access granted")
// }

// let isWeekend = false;
// let ifHoliday = true;

// if(isWeekend || ifHoliday) {
//     console.log ("no work today")
// }

// // Nested logic

// let isLoggedin1=true;
// let isAdmin= false;

// if(isLoggedin1) {
//     if(isAdmin){
//         console.log ("Admin Panel")
//     } else {
//         console.log ("Regular User Dashboard")
//     }
// }


// let isMember=true;
// let isDiscount= false;

// if(isMember) {
//     if(isDiscount){
//         console.log ("Discount")
//     } else {
//         console.log ("No Discount")
//     }
// }

// let age2= 20;
// let isStudent= true;

// if (age2 < 18 ) {
//     console.log ("Child price");
// } else {
//     if (isStudent) {
//         console.log ("Student price")
//     } else {
//         console.log ("Adult price")
//     }
// }


// // Truthy and falsy values 

// // false: 0, "", null, undefined

// let myName= "";

// if(myName) {
//     console.log ("Name exists")
// } else {
//     console.log ("No name")
// }

// if(0) {
//     console.log ("Runs")
    
// }

// if ("no name") {
//     console.log ("Runs");
// }

// let input= "Some input"

// if (input) {
//     console.log ("Input recieved")
// }

// // building a small decision program


// let age3= 20;
// let hasId= true;
// let isVip= true;

// if(age3 >= 18 && hasId ) {
//     if(isVip) {
//         console.log("Vip Access")
//     } else {
//         console.log("Standar Access")
//     }
// } else {
//     console.log ("Access denied");

// }


// Example 3: cinema ticket bot

// reverse se pravi so !

let age=70;
let hasCoupon=true;
let isSunday=true;


if(age < 12) {
    console.log ("Ticket is 8 dollars")
} else if (age >=65) {
    if(isSunday ) {
        console.log ("Ticket price: FREE")
    } else {
        console.log ("Ticket price: 10$")
    }

} else {
    if (hasCoupon && !isSunday) {
        console.log ("Ticket price: 10$")
    } else {
        console.log ("Ticket price: 15$")
    }
}



