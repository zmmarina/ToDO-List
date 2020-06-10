let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#adding");

let toDos = JSON.parse(localStorage.getItem("list_todo")) || [];

function renderToDos(){

    listElement.innerHTML = "";

    for (toDo of toDos){
        let toDoElement = document.createElement("li");
        let toDoText = document.createTextNode(toDo);
     

        let position = toDos.indexOf (toDo); 
        let linkElement = document.createElement ("button");
        let linkText = document.createTextNode ("x");

                
        linkElement.setAttribute ("onclick", 'deleteToDo (' + position + ')');

        linkElement.appendChild (linkText);
        toDoElement.appendChild (linkElement);
        toDoElement.appendChild (toDoText);
        listElement.appendChild (toDoElement);
    }
 
}

renderToDos();

function addToDo(){

    let toDoText = inputElement.value;

    if (toDoText.length > 1){

        toDos.push(toDoText);

        inputElement.value = "";
        renderToDos();
        saveToStorage();
    }    
}

buttonElement.onclick = addToDo;

function deleteToDo(position){
        
    toDos.splice ( position, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage(){

    localStorage.setItem("list_todo", JSON.stringify(toDos));
}
