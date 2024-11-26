function toggleButton(input, buttonId) {
    const submitButton = document.getElementById(buttonId);
    if (input.value.trim() === "") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const itemInput = document.getElementById('item');
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const newItem = document.createElement('li');
        newItem.classList.add('list-group-item');
        newItem.innerHTML = `
            <span class="task-text">${itemText}</span>
            <button class="btn btn-success btn-sm" onclick="markAsDone(this)">Mark as Done</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
        `;

        document.getElementById('items').appendChild(newItem);
        itemInput.value = "";
        toggleButton(itemInput, 'submit');

        const successLabel = document.getElementById('lblsuccess');
        successLabel.textContent = "Task added successfully!";
        successLabel.style.display = 'block';

        setTimeout(() => {
            successLabel.style.display = 'none';
        }, 3000);
    }
});

function markAsDone(button) {
    const taskText = button.parentElement.querySelector('.task-text');
    taskText.style.textDecoration = taskText.style.textDecoration === 'line-through' ? 'none' : 'line-through';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
