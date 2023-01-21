window.addEventListener("load",() => {
    const taskForm = document.querySelector("#task-form");
    const newTask = document.querySelector("#new_task");
    const listTask = document.querySelector("#tasks");

    taskForm.addEventListener("submit",(e) =>{
        // prevent it from refreshing the page
        e.preventDefault();
        
        const taskValue = newTask.value;

        if(!taskValue){
            alert("Field cannot be empty")
            return;
        }
        
        const task_add = document.createElement("div")
        task_add.classList.add("added-tasks")

        const task_content_add = document.createElement("div");
        task_content_add.classList.add("content");
        task_content_add.innerText =taskValue;

        task_add.appendChild(task_content_add);

        listTask.appendChild(task_add);
        
    })
})