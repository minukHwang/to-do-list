let taskInput = document.getElementById("task-input");
let plusButton = document.getElementById("plus-button");
let tabItem = document.querySelectorAll(".tab-item");
let underLine = document.getElementById("under-line");

console.log("탭은",tabItem);

plusButton.addEventListener("click", plus);

let taskList = [];
let taskOption = '';
let list = [];
list = taskList

for(let i=0; i<tabItem.length; i++){
    tabItem[i].addEventListener("click", filter);
    // tabItem[i].addEventListener("click", (event) => {
    //     filter(event)});
}


function plus() {
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    };
    console.log(task);
    taskList.push(task);
    render();
}

function render() {
    let resultHTML = "";
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHTML += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
        }
    }
    document.getElementById("task-list").innerHTML = resultHTML;
}


function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            console.log(taskList)
            break;
        }
    }
    render();
}

function deleteTask(id){
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i,1);
            console.log(taskList)
            break;
        }
    }
    render();
}

function filter(){
    let filterList = [];
    taskOption = this.id;
    console.log(taskOption);

    underLine.style.width = this.offsetWidth + "px"
    underLine.style.left = this.offsetLeft + "px"
    underLine.style.top = this.offsetTop + this.offsetHeight - 3 + "px"

    if(taskOption == "all"){
        list = taskList;
        render();
    } else if (taskOption == "not-done") {
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        } 
        list = filterList;
        render();
    } else if (taskOption == "done") {
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i]);
            }
        }
        list = filterList;
        render();
    }
}

function randomIDGenerate() {
    return ('000000000' + Math.random().toString(36).substr(2, 9)).slice(-9);
}
