// Local storage homework 

// Excercise 1

// document.addEventListener('DOMContentLoaded', () => {
//      const STORAGE_KEY = 'user_visit_count';
//      const countDisplay = document.getElementById("visit-count");
//      const resetButton = document.getElementById("reset-btn");

//      let visits = localStorage.getItem(STORAGE_KEY);

//      if(visits === null || isNaN(visits)) {
//         visits = 0;
//      } else {
//         visits = parseInt(visits, 10);
//      }
//      visits++;
//      localStorage.setItem(STORAGE_KEY, visits);
//      countDisplay.textContent = visits;
     
//        resetButton.addEventListener('click', () => {
//         localStorage.removeItem(STORAGE_KEY);
//         location.reload();
//        });

// });


// Exercise 2


// document.addEventListener(`DOMContentLoaded`, () => {
//     const STORAGE_KEY = "form_draft";

//     const nameInput= document.getElementById("name");
//     const emailInput= document.getElementById("email");
//     const messageInput=document.getElementById("message");
//     const clearButton = document.getElementById("clear-btn");

//     const savedData = localStorage.getItem(STORAGE_KEY);

//     if(savedData) {
//         const parsedData = JSON.parse(savedData);

//        nameInput.value = parsedData.name || "";
//        emailInput.value = parsedData.email || "";
//        messageInput.value= parsedData.message || "";
//     }


//     function savedFormData() {
//         const formData = {
//             name: nameInput.value,
//             email: emailInput.value,
//             message: messageInput.value

//         };

//         localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));
//     }

//     nameInput.addEventListener('input', savedFormData);
//     emailInput.addEventListener('input', savedFormData);
//     messageInput.addEventListener('input', savedFormData);

//     clearButton.addEventListener('click', ()=> {
//         nameInput.value = "";
//         emailInput.value = "";
//         messageInput.value = "";

//         localStorage.removeItem(STORAGE_KEY);

//     });
// });

// Excercise 3

// document.addEventListener("DOMContentLoaded", () => {

//     const STORAGE_KEY = "users";

//     const usernameInput = document.getElementById("username");
//     const ageInput = document.getElementById("age");
//     const addButton = document.getElementById("add-btn");
//     const userList = document.getElementById("user-list");

    
//     let users = loadUsers();

    
//     renderUsers();

    
//     addButton.addEventListener("click", () => {

//         const username = usernameInput.value.trim();
//         const age = ageInput.value.trim();

//         if (!username || !age) return;

//         const newUser = {
//             id: Date.now(), 
//             username: username,
//             age: Number(age)
//         };

//         users.push(newUser);

//         saveUsers();
//         renderUsers();

//         usernameInput.value = "";
//         ageInput.value = "";
//     });


  

//     function loadUsers() {
//         const data = localStorage.getItem(STORAGE_KEY);
//         return data ? JSON.parse(data) : [];
//     }

//     function saveUsers() {
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
//     }

//     function renderUsers() {
//         userList.innerHTML = "";

//         users.forEach(user => {

//             const li = document.createElement("li");

//             li.textContent = `${user.username} (${user.age}) `;

//             const deleteBtn = document.createElement("button");
//             deleteBtn.textContent = "Delete";

//             deleteBtn.addEventListener("click", () => {
//                 deleteUser(user.id);
//             });

//             li.appendChild(deleteBtn);
//             userList.appendChild(li);
//         });
//     }

//     function deleteUser(id) {
//         users = users.filter(user => user.id !== id);
//         saveUsers();
//         renderUsers();
//     }

// });