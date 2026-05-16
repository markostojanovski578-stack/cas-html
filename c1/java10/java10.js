import { TaskState } from "./state.js";
import { fetchInitialTasks } from "./api.js";
import { renderTasks } from "./ui.js";

const state = new TaskState();

const list = document.getElementById("task-list");
const form = document.getElementById("task-form");
const input = document.querySelector("#task-form input");

const updateUI = () => {
    renderTasks(state.getTasks(), list, id => {
        state.toggleTask(id);
        updateUI();
    });
}

async function init() {
    try {
        if(state.getTasks().length === 0) {
            const tasks = await fetchInitialTasks();
            state.setTasks(tasks);
        }
        updateUI();
    } catch (error){
        list.textContent = "Failed to load tasks. Please try again later.";
    }
}

form.addEventListener("submit", event => {
    // explain preventDefault()
    state.addTask(input.value);
    input.value = "";
    updateUI();
});

init();