// Task
class Task{
    constructor(name){
        this.name = name;
    }
}

class Ui{
    static addTaskToList(task){
        const h4 = document.querySelector('h4');
        h4.innerHTML = `0 Tasks Remaining`;
        const list = document.querySelector('.result')
        const unorderedList = document.querySelector('ul');
    

        unorderedList.innerHTML += `
        <li class="list-group-item mx-auto w-50">
        <div class="d-inline d-flex justify-content-between">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="taskAdded">
                <label for="taskAdded" class="custom-control-label">${task.name}</label> 
            </div>   
            <div> 
                <i class="fa fa-edit mr-2"></i>
                <i class="fa fa-trash"></i>
            </div>
        </div>
        </li>
        `;

        list.appendChild(unorderedList);
    }
    static clearFields(){
        document.querySelector('form').reset();
    }
}

// Event: add a Task
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form Values
    const enteredTask = document.querySelector('#inputTask').value;

    // Validate
    if(enteredTask === ''){
        Ui.showAlert('PLease fill in all fields', 'danger');
    }else{
        // Instanciate a Task
        const newTask = new Task(enteredTask);

        // Add a Task
        Ui.addTaskToList(newTask);

        // Clear fields
        Ui.clearFields();
    }
})