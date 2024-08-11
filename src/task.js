//traer una lista de tareas de almacenamiento local///
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Función para agregar una tarea//
//Una forma diferente de crear una funcion//
export const addTasks = (tasks) => {
    const newTask = {
        id: Date.now (),
        text: tasks,
        completed: false, 
    };
   tasks.push (newTask);
   localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para eliminar una tare//
export const deleteTasks = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("task", JSON.stringify(tasks));

}; 
// funcion para actualizar la tarea//
    export const toggleTask = (id) => {
        tasks = tasks.map((tasks) => {
            if(task.id === parseInt (id)) {
                task.completed
            }
        });
        localStorage.setItem("task", JSON.stringify(tasks));
};

//Funcion para llevar las tareas// 
    export const getTask = () => tasks; 