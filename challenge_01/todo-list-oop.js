// Task
class Task{
    static counter = 0;
    constructor(name){
        this.name = name;
    }
    static tasksRemaining(){
        const h4 = document.querySelector('h4');

        if(Task.counter === 0){
            {h4.innerHTML = `No Tasks Remaining`;}
            
            document.querySelector('#select').className = "list-group-item mx-auto w-50 invisible";
        }else{
            
            h4.innerHTML = `${Task.counter} Tasks Remaining`;
            document.querySelector('#select').className = "list-group-item mx-auto w-50 visible";
        }
    }
}

class Ui{
    static addTaskToList(task){
        if(Task.counter > 0){
            document.querySelector('#result').className = "result mt-5 visible";
            const unorderedList = document.querySelector('ul');
            
            unorderedList.innerHTML += `
            <li class="list-group-item mx-auto w-50">
            <div class="d-inline d-flex justify-content-between">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="taskAdded">
                    <label for="taskAdded" class="custom-control-label">${task.name}</label> 
                </div>   
                <div> 
                    <i class="fa fa-edit mr-2 edit"></i>
                    <i class="fa fa-trash delete"></i>
                </div>
            </div>
            </li>
            `;

            document.querySelector('#result').appendChild(unorderedList);
    }
        
    }
    static clearFields(){
        document.querySelector('form').reset();
    }
    static deleteTask(el){
        if(el.classList.contains('delete')){
            Task.counter--;
            el.parentElement.parentElement.parentElement.remove();
        }
    }
    
}
//  Event: Display All
document.addEventListener('DOMContentLoaded', Ui.addTaskToList);

// Event: add a Task
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    Task.counter++;
    // Get form Values
    const enteredTask = document.querySelector('#inputTask').value;

    // Validate
    if(enteredTask === ''){
        Ui.showAlert('PLease fill in all fields', 'danger');
    }else{
        // Instanciate a Task
        const newTask = new Task(enteredTask);

        Task.tasksRemaining();

        // Add a Task
        Ui.addTaskToList(newTask);

        // Clear fields
        Ui.clearFields();
    }
});

document.querySelector('ul').addEventListener('click', (e) => {
    Ui.deleteTask(e.target);
    Task.tasksRemaining();
})
