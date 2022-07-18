import {Todo} from "../classes";
import {todoList} from "../index";

let divTodoList = document.querySelector(".todo-list");
let txtInput = document.querySelector(".new-todo");
let btnBorrar = document.querySelector(".clear-completed");
let ulFiltros = document.querySelector(".filters");
let anchorFiltros = document.querySelectorAll(".filtro");

export const crearTodoHTML = (todo) =>{
    
    let htmlTodo = `
    <li class="${(todo.completado) ? "completed" : ""}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? "checked" : ""}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    let div = document.createElement("div");
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos

txtInput.addEventListener("keyup", (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        let nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHTML(nuevoTodo);
        txtInput.value = "";
    } 
})

divTodoList.addEventListener("click", (event) => {
    let nombreElemento = event.target.localName;
    let todoElemento = event.target.parentElement.parentElement;
    let todoId = todoElemento.getAttribute("data-id");
    
    if(nombreElemento.includes("input")){ //click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle("completed");
    }

    if(nombreElemento.includes("button")){ //click en la x para borrar
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
})

btnBorrar.addEventListener("click", () => {
    todoList.eliminarCompletados();
    for(let i = divTodoList.children.length - 1; i >= 0; i--){
        let elemento = divTodoList.children[i];
        
        if(elemento.classList.contains("completed")){
            divTodoList.removeChild(elemento);
        }
    }
    console.log(todoList)
})

ulFiltros.addEventListener("click", (event) =>{
    let filtro = event.target.text;
    if(!filtro){return;}

    anchorFiltros.forEach(elem => elem.classList.remove("selected"));
    event.target.classList.add("selected");

    for(let elemento of divTodoList.children){
        elemento.classList.remove("hidden");
        let completado = elemento.classList.contains("completed");
        switch(filtro){
            case "Pendientes":
                if (completado){
                    elemento.classList.add("hidden");
                }
            break;

            case "Completados":
                if (!completado){
                    elemento.classList.add("hidden");
                }
            break;
        }
    }
})