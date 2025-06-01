// Handle contact form submission and switch interface
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!name || !email) {
    errorMsg.textContent = "All fields are required.";
    errorMsg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    errorMsg.textContent = "Invalid email format.";
    errorMsg.style.color = "red";
    return;
  }

  // Success: Hide form, show to-do section
  document.getElementById("formSection").style.display = "none";
  document.getElementById("todoSection").style.display = "flex";
});

// Add Task to List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
