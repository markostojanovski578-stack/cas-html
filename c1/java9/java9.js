// Classes

// class User {
//  constructor(name, age,) {
//     if(!name || !age) {
//         throw new Error("Name and age are required fields");
//     }

//     this.name = name;
//     this.age = age;
//     this.isOnline = false;
//  }

// greet() {
//     return `Hello my name is ${this.name}`;
// }


//   setOnlineStatus(status) {
//     this.isOnline = status;
//   }

//   hasBirthday() {
//     this.age += 1;
//     return this.age;
//   }
// };

// const user = new User("Marko", 24);
// console.log(user);
// user.setOnlineStatus(true);
// user.hasBirthday();


// class BankAccount {
//     #balance;

//     constructor(owner, initalBalance) {
//        this.owner = owner
//        this.#balance = initalBalance
//     }
    
//     deposit (amount) {
//         if (amount <= 0) {
//             throw new Error("Deposit must be positive")
            
//         }
//         this.#balance += amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }

// }


// const client = new BankAccount("Marko", 500);
// client.deposit(100);
// console.log(client);

// class Admin extends User {
//     constructor(name, age, permissions) {
//         super(name, age);
//         this.permissions = permissions;
//     }

//     deleteUser(user) {
//         return `${this.name} deleted ${user.name} `
//     }
// }

// const admin = new Admin("John", 54, "Full Admin")
// const user_for_deletion = new User("Pero", 56);
// console.log(admin.deleteUser(user_for_deletion));
// console.log(admin);

// class MathHelper {
//     static add(a, b) {
//         return a + b;
//     }
// }
// const new_instaces = new MathHelper();
// // new_instaces.add(5, 10);
// console.log(MathHelper.add(5, 10));



// Mutation
// const user = {
//     name: "Marko",
//     age: 24
// }

// // user.age = 33;

// // console.log(user);

// // Immutable update

// const updatedUser= {
//     ...user,
//     age: 27
// }
// console.log(user);
// console.log(updatedUser);
// console.log(user === updatedUser);



// Error handling

// class Error {
//     constructor(message) {
//        this.message = message;
//     }
// }


// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "Validation Error";
//     }
// }

// const divide = (a, b) => {
//     if (b === 0) {
//         throw new ValidationError("Cannot be divided")
//     }

//     return a / b;

// }

// try {
//     divide (10, 0);
// } catch(error){
//     console.error(error.name, error.message);
// }

// console.log(divide(10, 0));

// Exercise - Mini Shop Architecture


// Error Classes

// class Error {
//     constructor(message) {
//         this.message = message;

//     }
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";

//     }
// }

// class NotFoundError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "NotFoundError";
//     }
// }

// class StockError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "StockError";
//     }
// }


// // User class

// class User {
//     constructor(name, email) {
//         if(!name || !email) {
//             throw new ValidationError("Name and Email are required")
//         }
//         if(!email.includes("@")) {
//             throw new ValidationError("Invalid e-mail format");
//         }
//         this.name = name;
//         this.email = email;
//     }
// }

// // Product class

// class Product {
//     constructor(name, price, stock) {
//          if(!name) {
//             throw new ValidationError("Product name is required")
//          }
        

//          if(price <= 0) {
//             throw new ValidationError("Price must be positive");
//          }

//          if(stock < 0) {
//             throw new ValidationError("Stock cannot be negative");
//          }

//         this.name=name;
//         this.price=price;
//         this.stock = stock;
//     }

//     reduceStock(quantity) {
//         if(quantity <= 0) {
//             throw new ValidationError("Quantity must be positive");

//         }
        
//         if(quantity > this.stock) {
//             throw new StockError("Not enough stock");

            
//         }
//         this.stock -= quantity;
//     }

// }

// class Shop  {
//     constructor() {
//         this.users = [];
//         this.producst= [];
//     }

//     registerUser(user) {
//         if(!(user instanceof User)) {
//             throw new ValidationError("Invalid user")

//         }
//         this.users.push(user);
//     }

//     addProduct(product) {
//         if(!(product instanceof Product)) {
//             throw new ValidationError("Invalid Product")

//         }
//         this.producst.push(product);
//     }

//     purchase(userEmail, productName, quantity) {
//         const user = this.users.find(user => user.email === userEmail);
//         if(!user) {
//             throw new NotFoundError("User not found")
//         }

//         const product = this.producst.find(product => product.name === productName);
//         if(!product) {
//             throw new NotFoundError("Product not found");
//         }

//         product.reduceStock(quantity);
//         return (`${user.name} purchased${quantity} ${product.name}`)
//     }
// }

// try {
//     const shop = new Shop();
//     const user_one = new User("Marko", "markostojanovski578@gmail.com");
//     const laptop = new Product("Laptop", 1200, 5);

//     shop.registerUser(user_one);
//     shop.addProduct(laptop);

//     const result = shop.purchase(user_one.email, laptop.name, 2);
//     console.log(result);
//     console.log("Remaining stock: " , laptop.stock);

// } catch (error){
//     if( error instanceof ValidationError) {
//         console.error("Validation Error :", error.message);

//     } else if (error instanceof NotFoundError){
//         console.error("Not found ", error.message);

//     } else if (error instanceof StockError) {
//         console.error("Stock issue: ", error.message);

//     } else {
//         console.error("Unexpected error:" , error.message);
//     }
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// Canvas

// window.onload = () => {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

    // ctx.fillStyle = "red";
    // ctx.fillRect(50, 50, 100, 100);

    // ctx.beginPath();
    // ctx.arc(250 ,250, 50, 0, Math.PI * 2);
    // ctx.fillStyle = "hold";
    // ctx.fill();
    // ctx.stroke();


    // let x = 0;
    // let speed = 2;
    
    // const draw = () => {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.beginPath();
    //     ctx.arc(x, 250, 30, 0, Math.PI * 2);
    //     ctx.fillStyle = "magenta";
    //     ctx.fill();


    //     x += speed;

    //     if(x > 900 || x < -10) {
    //         speed = -speed;
    //     }

    //     requestAnimationFrame(draw);
    // }

    // draw();

    // Bonus: Bounce

//     let y = 50;
//     let speed = 3;
//     let radius = 20;

//     const bounce = () => {
//           ctx.clearRect(0, 0, canvas.width, canvas.height);
//           ctx.beginPath();
//           ctx.arc(500, y, radius, 0, Math.PI * 2);
//           ctx.fillStyle = "crimson";
//           ctx.fill();

//           y += speed;

//           if(y + radius > canvas.height || y - radius < 0);{
//             speed =- speed;
//           }
//           radius += 0.1;
//           requestAnimationFrame(bounce);
//     }
// bounce();
 

    
// };



