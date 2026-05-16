// Local Storage

// localStorage.setItem("username","Marko");

// const user = localStorage.getItem("username");

// console.log(user);

// localStorage.removeItem("username");

// localStorage.clear брише се!

// localStorage.clear();


// const input = document.getElementById("nameInput");
// const saveBtn = document.getElementById("saveButton")
// const output = document.getElementById("output");
// const savedName = localStorage.getItem("name");

// if(savedName) {
//     output.textContent = `Hello ${savedName}`;
// }

// saveBtn.addEventListener("click", () => {
//     const input_value= input.value;
//     localStorage.setItem("name", input_value)
//     output.textContent = `Hello ${input_value}`;
// });

// function ClickMe() {
//     alert("The button was clicked");
// }

// Theme change

// const themeButton = document.getElementById("toggleTheme");

// const applyTheme = () => {
//     document.body.classList.remove("light","dark");
//     document.body.classList.add(theme);
// }

// const savedTheme = localStorage.getItem("theme");

// if(savedTheme) {
//     applyTheme(savedTheme);
// } else {
//     applyTheme('light');
// }

// themeButton.addEventListener("click", () => {
//     const isDark = document.body.classList.contains("dark");
//     const currentTheme = isDark ? "light" : "dark";
    
//     applyTheme(currentTheme);
//     localStorage.setItem("theme", currentTheme);
// });

// const user = {name: "marko", age: 32};
// localStorage.setItem("user", JSON.stringify(user));
// const storedUser = localStorage.getItem("user");
// const parsedUser = JSON.parse(storedUser);
// console.log(parsedUser);

// const taskName = document.getElementById("taskName");
// const addTaskButton = document.querySelector(".addTask");
// const taskList = document.querySelector(".taskList");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
 
// const renderTasks = () => {
//     taskList.innerHTML= "";
//      tasks.forEach(task  => {
//         const li = document.createElement("li");
//         li.textContent = task;
//         taskList.appendChild(li);
//      })
        
     
// }

// const handleAddTask = () => {
//     const newTask = taskName.value; 
//     tasks.push(newTask);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     renderTasks();
//     taskName.value = "";
// }

// taskName.addEventListener("keypress", (event) => {
//     if(event.key === "Enter") {
//        handleAddTask();
//     }
    
// });

// addTaskButton.addEventListener("click", () => {
//     const newTask = taskName.value; 
//     tasks.push(newTask);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     renderTasks();
//     taskName.value = "";
    
// });

// renderTasks();

const notes = document.getElementById("notes");
const note_status = document.getElementById("status");

notes.value = localStorage.getItem("notes") || "";

notes.addEventListener("input", () => {
    localStorage.setItem("notes", notes.value);
    note_status.textContent = "Saving...";
    setTimeout(() =>note_status.textContent= "Saved", 1000);

});




