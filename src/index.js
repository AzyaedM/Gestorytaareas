import "./styles"; 
import { addTasks,deleteTasks, toggleTask } from "./task";
import { renderTask } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    renderTaskn ();
    document.getElementById("task-form").addEventListener("submit", (e) =>  {
        e.preventDefault();
        const  taskInput = document.getElementById("task-input").value;
    });
});