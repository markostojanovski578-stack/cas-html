// 12 February JavaScript homework

// Exercise 1

// const heading = document.getElementById("myHeading");
// const button = document.getElementById("myBtn");

// const paragraphs = document.querySelectorAll("p");

// button.addEventListener("click", function() {
//     heading.textContent = "The heading has changed!";
//     paragraphs.forEach (function(p) {
//         p.style.color = "blue";
//     });
// });


// Exercise 2

// const button = document.getElementById("addItemBtn");
// const container = document.getElementById("container");

// let count= 1;

// button.addEventListener("click", function()  {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = "Item number" + count;
//     container.appendChild(newParagraph);
//     count++;
// })

// Excercise 3

// const addButton = document.getElementById("btn");
// const list = document.getElementById("list")

// let itemNumber = 1;

// addButton.addEventListener('click', function() {
//     const newItem = document.createElement('li');
//     newItem.textContent = "List item" + itemNumber;
//     itemNumber++;
//     newItem.addEventListener('click', function() {
//     this.remove();
// })

// list.appendChild(newItem);
// });

// Exercise 4 - оваа вежба беше од часот во среда ама ќе ја ставам тука затоа што е една само.

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {

    const table = document.createElement("table");
    table.classList.add("user-table");


const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = ["Name", "Email", "Phone"];

headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText 
    headerRow.appendChild(th);
})

thead.appendChild(headerRow)
table.appendChild(thead);

const tbody = document.createElement("tbody");

users.forEach(user => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    const emailCell = document.createElement("td")
    emailCell.textContent = user.email;
    const phoneCell = document.createElement("td"); 
    phoneCell.textContent = user.phone;
    row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);

             tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);


});

 