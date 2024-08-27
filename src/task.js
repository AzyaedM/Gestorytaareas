//traer una lista de tareas de almacenamiento local///
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Función para agregar una tarea//
//Una forma diferente de crear una funcion//
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false, 
    };
   tasks.push(newTask);
   localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para eliminar una tare//
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));

}; 
// funcion para actualizar la tarea//
    export const toggleTask = (id) => {
        tasks = tasks.map((task) => {
            if(task.id === parseInt(id)) {
                task.completed = !task.completed;
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para llevar las tareas// 
    export const getTasks = () => tasks; 