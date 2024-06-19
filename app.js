let inputbox = document.querySelector("#inputbox");
let submitbutton = document.querySelector("#submitbutton")
let task_zone = document.querySelector(".task_zone");
let inputvalue;
let new_button = document.querySelector("#new_button");

function creatingElements(inputvalue){

    // creating task class and appending in task_zone class
    let task = document.createElement("div");
    task.setAttribute("class","task");
    task_zone.append(task);
    
    //creating left_side div and appending in task class
    let left_side = document.createElement("div");
    left_side.setAttribute("class","left_side");
    task.append(left_side);

    //creating right_side div and appending in the task class
    let right_side = document.createElement("div");
    right_side.setAttribute("class","right_side");
    task.append(right_side);

    //creating checkbox button and appending in the left_side div
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    left_side.append(checkbox);

    //creating the input task and appending in the left_side div
    let task_paragraph = document.createElement("p");
    task_paragraph.innerText = inputvalue;
    left_side.append(task_paragraph);
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            task_paragraph.style.textDecoration = "line-through";
            task_zone.append(task);
        } else {
            task_paragraph.style.textDecoration = "none";
        }
    });
    

    //creating delete button and appending in the right_side div
    let deleteButton = document.createElement("img");
    deleteButton.src = "images/download2.png";
    deleteButton.alt = "delete button";
    right_side.append(deleteButton);
    right_side.style.cursor = "pointer";

    deleteButton.addEventListener('click', () => {
        task_zone.removeChild(task);
    });

}


function submit_task(){
    inputvalue = inputbox.value;
    if(inputvalue===""){
        alert("Please Enter some value in the Task Box");
    }
    else{
        console.log(inputvalue);
        inputbox.value = "";
        creatingElements(inputvalue);
    }
}

submitbutton.addEventListener("click",submit_task);


new_button.addEventListener("click",()=>{
    let allTasks = document.querySelectorAll(".task");
    for(let tasks in allTasks){
        task_zone.removeChild(allTasks[tasks]);
    }
})
