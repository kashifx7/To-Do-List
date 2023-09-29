const todoList = [];




function renderTodoList() {
    let todoListHTML = "";

    todoList.forEach(function(todoObj,index)
    {
        const { name, dueDate } = todoObj;

        const html = `
        
        <div>${name} </div>
        <div> ${dueDate} </div>
            <button 
            class="delete-btn js-delete-btn"
            onclick="
                todoList.splice(${index},1);
                renderTodoList();
            "> Delete </button>
        
        `;
        todoListHTML += html;
    });

    //j* down from there whole code 
    // we are updating page HTML
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;

    // but after updating we have multiple btn which one delete
    // document.querySelector(".js-delete-btn");

    // querySelectorAll('.js-delete-btn') will give all delete btn see for yourself
    // console.log(document.querySelectorAll(".js-delete-btn"));
    document.querySelectorAll(".js-delete-btn")
    .forEach((deleteButton,index) =>{
        deleteButton.addEventListener('click',() =>{
            todoList.splice(index,0); //for 1 it was deleting 2 btn 
                renderTodoList();
        })
    });
}



document.querySelector('.js-add-todo-btn').addEventListener
('click', () => {
    addTask();
});



function addTask() {
    const inputElementName = document.querySelector(".js-name-input");
    const name = inputElementName.value;

    const inputElementDate = document.querySelector(".js-duedate-input");
    const dueDate = inputElementDate.value;

    // console.log(name);
    todoList.push({
        // name:name ,
        // dueDate: dueDate 
        // Or shorthand property
        name, dueDate
    });
    // console.log(todoList);
    inputElementName.value = ''; //j*
    inputElementDate.value = ''; //j*

    renderTodoList();
}

