// DOM ELements
const btn = document.querySelector('form');
let list = document.querySelector('.result');
const inputText = document.querySelector('input');
const unorderedList = document.createElement('ul');
// Change Name Project
const nameProject = document.querySelector('h1');
nameProject.innerText = '1st day Challenge -- Todo-List';
// Add unordered list - ul HTML tag
list.appendChild(unorderedList);

btn.addEventListener('submit', (e) => {
    e.preventDefault();

    addTasks(inputText);
    
    // Clear and focus input field
    inputText.value = '';
    inputText.focus();
})

const addTasks = (inputText) => {
    // Simple if statement to check empty input
    if(inputText.value <= 0){
        alert('Please fill the input');
    }else{
        // First creates a task then append to unordered list created
        const task = document.createElement('li');
        task.innerHTML = inputText.value;
        unorderedList.appendChild(task);

        deleteFc(task);
    }
}

const deleteFc = (task) => {
    // Create a delete btn and append to task
    let deleteBtn;
    deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    task.appendChild(deleteBtn);
    // When delete button are triggered we append remove the task from ul
    deleteBtn.addEventListener('click', () => {
        unorderedList.removeChild(task);
    });
}

 


