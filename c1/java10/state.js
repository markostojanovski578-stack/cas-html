export class TaskState {
    constructor() {
        const saved = localStorage.getItem("tasks");
        this.tasks = saved ? JSON.parse(saved) : [];
    }

    setTasks(tasks) {
        this.tasks = tasks;
        this.persist();
    }

    addTask(title) {
        const newTask = {
            id: Date.now(),
            title,
            completed: false
        }

        this.tasks.push(newTask);
        this.persist();
    }

    toggleTask(id) {
        this.tasks = this.tasks.map(task => {
            task.id === id ? { ...task, completed: !task.completed } : task
        });
        this.persist();
    }

    getTasks() {
        return this.tasks;
    }

    persist() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}