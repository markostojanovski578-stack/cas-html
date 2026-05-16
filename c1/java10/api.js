export async function fetchInitialTasks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if(!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    const data = await response.json();
    return data.slice(0, 10);
}