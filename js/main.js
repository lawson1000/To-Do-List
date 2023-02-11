window.addEventListener("load",() => {

    // window files

    reload = JSON.parse(localStorage.getItem("reload")) || [];

    const taskForm = document.querySelector("#task-form");
    const newTask = document.querySelector("#new_task");
    const listTask = document.querySelector("#tasks");
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username').toLowerCase();
    const userholder = document.querySelector("#new_task");

    if (username == null) {
        alert("Kindly Sign in...");
        window.location.replace("index.html");
    }

    const finalname =username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

    userholder.placeholder= "Hi! " + finalname + ", Please Add Your activities! "

    var userTasks = localStorage.getItem(`${username}TaskStore`);
    userTasks = userTasks !== "" ? JSON.parse(userTasks) : [];

    // global variables 
    var oldValue, newValue;

    // function to add task

    addTask = (taskContent) => {
    
        const task_add = document.createElement("div")
        task_add.classList.add("added-tasks")
    
        const task_content_add = document.createElement("div");
        task_content_add.classList.add("content");
        task_add.appendChild(task_content_add);
    
        const task_input =document.createElement("textarea")
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = taskContent;
        task_input.setAttribute("readonly", "readonly");
    
        task_content_add.appendChild(task_input)
    
        const task_actions=document.createElement("div")
        task_actions.classList.add("action")
    
        const task_edit = document.createElement("button")
        task_edit.classList.add("edit")
        task_edit.innerHTML ="Edit";
    
        const task_delete = document.createElement("button")
        task_delete.classList.add("delete")
        task_delete.innerHTML ="Delete";
        
        task_actions.appendChild(task_edit)
        task_actions.appendChild(task_delete)       
    
        task_add.appendChild(task_actions)
    
        listTask.appendChild(task_add);
        
        task_edit.addEventListener('click',(e) => {

            if(task_edit.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
                oldValue = task_input.value;
                // console.log(task_input.value);

                task_input.focus();
                task_edit.innerText ="Save";
            }
            else{
                console.log("before: " + userTasks)
                task_input.setAttribute("readonly","readonly")
                task_edit.innerText ="Edit";
                newValue = task_input.value;

                var index = userTasks.indexOf(oldValue);
                userTasks[index] = newValue;

                // push task to storage
                localStorage.setItem(`${username}TaskStore`, JSON.stringify(userTasks));

                console.log("after: " + userTasks)
            }
        });
    
        task_input.addEventListener('keypress',(event) =>{
            click = event.key;
            if(click === "Enter"){
                task_input.setAttribute("readonly","readonly")
                task_edit.innerText ="Edit";
            }
        });
    
        
        task_delete.addEventListener('click',() => {
            listTask.removeChild(task_add);
            userTasks.splice(userTasks.indexOf(oldValue), 1);
            
            // push task to storage
            localStorage.setItem(`${username}TaskStore`, JSON.stringify(userTasks));

        })
        
    }

    

    taskForm.addEventListener("submit",(e) =>{
        // prevent it from refreshing the page
        e.preventDefault();
        
        const taskValue = newTask.value;
 
        if(!taskValue){
            alert("Field cannot be empty")
            return;
        } else {
            newTask.value = "";
            // add task to frame
            addTask(taskValue);
            
            // add task to list
            userTasks.push(taskValue);
            
            // push task to storage
            localStorage.setItem(`${username}TaskStore`, JSON.stringify(userTasks));
        }
        
    })

    // Storage Check
    loadStorageTasks = () => {
    
        for (var i = 0; i < userTasks.length; i++) {
            addTask(userTasks[i]);
        }

        // localStorage.setItem(`${username}taskStore`, JSON.stringify(dictionary));

    }
    
    // load storage
    loadStorageTasks();

});

