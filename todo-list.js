// DOM ELements
const btn = document.querySelector('form');
let list = document.querySelector('.result');
const inputText = document.querySelector('input');
const unorderedList = document.createElement('ul');
list.appendChild(unorderedList);
let deleteBtn;


btn.addEventListener('submit', (e) => {
    e.preventDefault();
    addTasks(inputText);
    inputText.value = '';
    inputText.focus();
})

const addTasks = (inputText) => {
    if(inputText.value <= 0){
        alert('Please fill the input');
    }else{
        const task = document.createElement('li');
        task.innerHTML = inputText.value;
        unorderedList.appendChild(task);

        deleteFc(task);
    }
}

const deleteFc = (task) => {
    deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    task.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
    unorderedList.removeChild(task);
})
}

 


