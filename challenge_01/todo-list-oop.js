// Task
class Task {
    static counter = 0;
    constructor(name) {
        this.name = name;
    }
    static tasksRemaining() {
        const h4 = document.querySelector('h4');

        if (Task.counter === 0) {
            { h4.innerHTML = `No Tasks Remaining`; }

            document.querySelector('#select').className = "list-group-item mx-auto w-50 invisible";
        } else {
            h4.innerHTML = `${Task.counter} Tasks Remaining`;
            document.querySelector('#select').className = "list-group-item mx-auto w-50 visible";
        }
    }
}

class Ui {
    static addTaskToList(task) {
        if (Task.counter > 0) {
            document.querySelector('#result').className = "result mt-5 visible";
            const unorderedList = document.querySelector('ul');

            unorderedList.innerHTML += `
            <li class="list-group-item mx-auto w-50">
                <div class="float-left">
                    <div class="delete" id="taskAdded">
                        ${task.name}
                    </div>
                </div>
                <div class="float-right"> 
                    <i class="fa fa-edit mr-2 edit"></i>
                    <i class="fa fa-trash delete"></i>
                </div>
            </div>
            </li>
            `;

            document.querySelector('#result').appendChild(unorderedList);
        }

    }
    static clearFields() {
        document.querySelector('form').reset();
    }
    static deleteTask(el) {
        if (el.classList.contains('delete')) {
            Task.counter--;
            const rmEl = el.parentElement.parentElement;
            rmEl.remove();
        }
    }

    
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const h2 = document.querySelector('h2');
        container.insertBefore(div, h2);
        // Vanish 3 sec
        setInterval(()=>{
            document.querySelector('.alert').remove();
        }, 3000)
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
    if (enteredTask === '') {
        Ui.showAlert('PLease fill in all fields', 'danger');
    } else {
        // Instanciate a Task
        const newTask = new Task(enteredTask);

        // How much Tasks remaining
        Task.tasksRemaining();

        // Add a Task
        Ui.addTaskToList(newTask);

        // Clear fields
        Ui.clearFields();

        // Delete everything
        document.querySelector('.trash').addEventListener('click', () => {
            let boxes = document.querySelectorAll('#taskAdded');

            boxes.forEach((box) => {
                Ui.deleteTask(box)
                Task.tasksRemaining();
            })

            
        })
    }
});


document.querySelector('ul').addEventListener('click', (e) => {
    Ui.deleteTask(e.target);
    Task.tasksRemaining();
})
