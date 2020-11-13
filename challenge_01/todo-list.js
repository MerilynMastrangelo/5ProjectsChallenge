// DOM ELements
const btn = document.querySelector('form');
let list = document.querySelector('.result');
const inputText = document.querySelector('input');
const unorderedList = document.createElement('ul');

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
        
        unorderedList.innerHTML += `<li class="list-group-item">${inputText.value} <a href="#" class="btn btn-danger btn-sm delete ml-4">X</a></li>`;
        list.appendChild(unorderedList);
        
    }
}

unorderedList.addEventListener('click', (e) => {
    deleteFc(e.target.parentElement);
})

function deleteFc(element) {
    element.remove();
}


