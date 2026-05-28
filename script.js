const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(taskText);

    saveTasks();

    taskInput.value = "";
}

function createTask(taskText) {

    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function () {

        li.classList.toggle("completed");

        saveTasks();

    });

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        li.remove();

        saveTasks();

    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

function saveTasks() {

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(function (li) {

        tasks.push({
            text: li.childNodes[0].textContent,
            completed: li.classList.contains("completed")
        });

    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function loadTasks() {

    const tasks =
        JSON.parse(localStorage.getItem("tasks"))
        || [];

    tasks.forEach(function(task){

        createTask(task.text);

        const lastTask =
            taskList.lastChild;

        if(task.completed){

            lastTask.classList.add(
                "completed"
            );
        }

    });
}

taskInput.addEventListener(
"keypress",
function(event){

if(event.key==="Enter"){

addTask();

}

});