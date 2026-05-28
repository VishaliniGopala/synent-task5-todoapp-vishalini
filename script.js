const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){

        li.remove();

    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

});