// Show Tabs
function showTab(tabName) {
    document.getElementById("all").style.display = "none";
    document.getElementById("completed").style.display = "none";
    document.getElementById("pending").style.display = "none";
    document.getElementById("important").style.display = "none";

    document.getElementById(tabName).style.display = "block";
}

// Add Task
function addTask() {
    let taskText = document.getElementById("taskInput").value;

    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // complete button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function () {
        document.getElementById("completed").appendChild(li);
    };

    // pending button
    let pendingBtn = document.createElement("button");
    pendingBtn.textContent = "⏳";
    pendingBtn.className = "pending-btn";
    pendingBtn.onclick = function () {
        document.getElementById("pending").appendChild(li);
    };

    // important button
    let importantBtn = document.createElement("button");
    importantBtn.textContent = "⭐";
    importantBtn.className = "important-btn";
    importantBtn.onclick = function () {
        document.getElementById("important").appendChild(li);
    };

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    // append buttons
    li.appendChild(completeBtn);
    li.appendChild(pendingBtn);
    li.appendChild(importantBtn);
    li.appendChild(deleteBtn);

    // add to main list
    document.getElementById("all").appendChild(li);

    // clear input
    document.getElementById("taskInput").value = "";
}