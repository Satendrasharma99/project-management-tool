// Function to add a new task
function addNewTask() {
    // Ask the user for the task title
    const taskTitle = prompt("Enter task title:");
    if (!taskTitle) return; // If empty, stop execution

    // Ask the user for the task description
    const taskDesc = prompt("Enter task description:");
    
    // Create a new task card element (HTML)
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    
    // Insert title and description inside the task card
    taskCard.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDesc || 'No description provided.'}</p>
    `;

    // Clicking this task will move it to the next column
    taskCard.addEventListener("click", function() {
        moveTask(taskCard);
    });

    // Append the new task to the 'To Do' list column
    document.getElementById("todo-list").appendChild(taskCard);
}

// Function to move a task to the next column
function moveTask(card) {
    const todoList = document.getElementById("todo-list");
    const progressList = document.getElementById("progress-list");
    const doneList = document.getElementById("done-list");

    // If the task is in 'To Do', move it to 'In Progress'
    if (card.parentElement === todoList) {
        progressList.appendChild(card);
    } 
    // If the task is in 'In Progress', move it to 'Done'
    else if (card.parentElement === progressList) {
        doneList.appendChild(card);
    } 
    // If the task is in 'Done', ask to delete it on click
    else if (card.parentElement === doneList) {
        const confirmDelete = confirm("Do you want to delete this completed task?");
        if (confirmDelete) {
            card.remove();
        }
    }
}

// Enable click logic for pre-existing sample task cards
document.querySelectorAll(".task-card").forEach(card => {
    card.addEventListener("click", function() {
        moveTask(card);
    });
});
