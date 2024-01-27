//Variables
let todoInputfield = document.getElementById("todoInput");
let addbtn = document.getElementById("addTodo");
let todoUl = document.getElementById("ul-new-todo");

//Eventhandler
addbtn.addEventListener('click', addNewTodo);


//Functions
function addNewTodo (event) {
    event.preventDefault();

    //type something
    if (todoInputfield.value === ""){
        alert("you need to type something");
    }else {
    //create div Conatainer for list Elements
    const divCo = document.createElement("div");
    divCo.classList.add("new-todo");
    todoUl.appendChild(divCo);
    //create list Element
    const li = document.createElement("li");
    li.innerHTML = todoInputfield.value;
    divCo.appendChild(li);
    //create Check Button
    const checkbtn = document.createElement("button");
    checkbtn.addEventListener('click', checked);
    function checked (){
        li.classList.toggle("checked");
        divCo.classList.toggle("checkedDiv");
    }
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    li.insertAdjacentElement("afterend", checkbtn);
    //create delete Button
    const deletebtn = document.createElement("button");
    deletebtn.addEventListener('click', deleted);
    function deleted (){
        todoUl.removeChild(divCo);
    }
    deletebtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deletebtn.classList.add("delete-btn");
    checkbtn.insertAdjacentElement("afterend", deletebtn);
    //reset input field
    todoInputfield.value = "";
    }
}