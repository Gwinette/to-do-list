const container = document.getElementById('container')
const nameInput = document.getElementById('nameInput')
const addBtn = document.getElementById('addBtn')
const nameDone = document.getElementById('nameDone')
const doneBtn = document.getElementById('doneBtn')
const nameDel = document.getElementById('nameDel')
const delBtn = document.getElementById('delBtn')
let tasks =[]
addBtn.addEventListener('click', () => {
    const task = {
        name: nameInput.value,
        isDone: false
    }
    tasks.push(task)
    nameInput.value = ''
    render()
})

const render = () => {
    container.innerHTML = ''
    tasks.map((task) => {
        const taskItem = document.createElement('div')
        taskItem.innerHTML = task.name
        taskItem.classList.add('task-item')

        const taskIsDone = document.createElement('div')
        task.isDone ? taskIsDone.innerHTML="(выполнено)" : taskIsDone.innerHTML="(не выполнено)"
        taskIsDone.classList.add('task-is-done')

        taskItem.appendChild(taskIsDone)
        container.appendChild(taskItem)
    })
}

doneBtn.onclick = function() {
    const doneIndex = tasks.findIndex(e => e.name === nameDone.value);
    if (doneIndex>=0) {
        tasks[doneIndex].isDone = true
        nameDone.value = ''
    } else {
        alert("Некорректное название задачи.");
    }
    render()
}

delBtn.onclick = function() {
    const delIndex = tasks.findIndex(e => e.name === nameDel.value);
    if (delIndex>=0) {
        tasks.splice(delIndex, 1);
        nameDel.value = ''
    } else {
        alert("Некорректное название задачи.");
    }
    render()
}

