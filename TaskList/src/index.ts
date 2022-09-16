let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app #add") as HTMLInputElement;
let buttonElementRemove = document.querySelector("#app #remove ") as HTMLInputElement;

let savedList: (string | null) = localStorage.getItem('@task_list')
let listTask: string[] = savedList !== null && JSON.parse(savedList) || [];

function listTasks(){
    listElement.innerHTML = '';

    listTask.map(item=>{
        let todoElement = document.createElement('li');
        let tarefaText = document.createTextNode(item);

        todoElement.appendChild(tarefaText);
        listElement.appendChild(todoElement);
    })
}

listTasks();

function addTask(){
    if(inputElement.value == ""){
        alert("Digita algo ai zé ruela");
        return false
    }

    let writeTask:string = inputElement.value;

    listTask.push(writeTask);
    
    inputElement.value = '';
    listTasks();
    saveData(listTask);
}

function removeLastItem(){
    listTask.pop();
    localStorage.setItem("@task_list", JSON.stringify(listTask));
    listTasks();
}

function saveData(listData:string[]){
    localStorage.setItem("@task_list", JSON.stringify(listData));
}

buttonElement.addEventListener('click', addTask);
buttonElementRemove.addEventListener('click', removeLastItem);