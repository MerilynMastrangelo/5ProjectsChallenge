// DOM Elements
const form = document.querySelector('form');
const noteInput = document.querySelector('#note');
const noteContainer = document.querySelector('.result');
const none = document.querySelector('p');
let counter = 1;
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');


const modalContent = document.querySelector('.modal-content');


const addNote = (counter) => {
    none.remove();
    if(noteInput.value <= 0){
        alert('Please enter a note.');
    }else{
        const view = document.createElement('button');
        view.innerHTML = 'View Details';
        const content = document.createElement('div');
        content.innerHTML = `
        <h3>Note ${counter}</h3>
        <p>${noteInput.value}</p>
        `;
        
        content.appendChild(view);
        noteContainer.appendChild(content);

        noteContentStyle(content);

        viewMore(view, content);
    
    }
    
        
}

const noteContentStyle = (content) => {
    content.style.cssText = `
    border: 3px solid #242424; 
    box-shadow: 5px 10px #242424;
    color: #242424;
    height: 120px;
    padding: 5px;
    margin: 3% 15%;
    text-align: left;
    `;  
}

const viewMore = (viewButton, content) => {
    viewButton.addEventListener('click', () => {
        modal.style.display = "block";

        const modalContent = document.querySelector('.modal-content');
        const pmodal = document.createElement('p');

        pmodal.appendChild(content.children[1])
        modalContent.appendChild(pmodal);
        modal.appendChild(modalContent);
    })
}

close.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', (e) => {
    if(e.target === modal) modal.style.display = "none";
})

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    addNote(counter);
    
    noteInput.value = '';
    noteInput.focus();
    counter++;
});
