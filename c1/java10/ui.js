export function renderTasks(tasks, container, onToggle) {
    container.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title;

        if(task.completed) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }

        li.addEventListener("click", () => {
            onToggle(task.id);
        });

        container.appendChild(li);
    });
}