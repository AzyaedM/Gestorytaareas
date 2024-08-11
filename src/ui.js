import { getTask } from "./task";

//Funcion para mostrarle al usuario las tareas//
export const renderTask = (  ) => {
    const Tasklist = document.getElementById ("task-list");
    Tasklist.innerHTML = ""; 
    const task = getTask ( );
    task.forEach ((task) => {
        const li = document.createElement ("li");
        li.setAttribute("dataid",task.id);

    //Solo añadir si la tarea está completada//
    if(task.completed === true) {
        li.classList.add("completed");
    }
    li.innerHTML = `
    ${task.text}
    <button class="delete"> Eliminar </button>
    <button class="toggle"> ${task.completed === true ? "Deshacer" : "Completar"} </button>
    `;

    taskList.appendChild(li);
    }); 
   
};