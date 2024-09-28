let tasks = ["Выполнить ДЗ","Приготовить ужин", "Покушать"];
let isCompleted = [false, false, false]
function showTasks() {
    if (tasks.length === 0) {
        alert("У Вас нет задач!");
    } else {
        let tasksList = "Ваши задачи:\n";
        for (let i = 0; i < tasks.length; i++) {
            tasksList+=tasks[i];
            isCompleted[i] ? tasksList+=" (выполнено)\n" : tasksList+=" (не выполнено)\n";
        }
        alert(tasksList);
    }
}

function addTask() {
    const newTask = prompt("Введите задачу");
    if (newTask) {
        tasks.push(newTask);
        isCompleted.push(false);
        showTasks()
    } else {
        alert("Вы не ввели задачу!");
    }
}

function deleteTask() {
    showTasks();
    const nameOfTask = prompt("Укажите название задачи для удаления:");
    if (tasks.includes(nameOfTask)) {
        const indexOfDeletedTask = tasks.indexOf(nameOfTask);
        const deletedTask = tasks.splice(indexOfDeletedTask, 1);
        isCompleted.splice(indexOfDeletedTask, 1);
        alert("Вы удалили задачу: " + deletedTask);
    } else {
        alert("Некорректное название задачи.");
    }
    showTasks();
}

function completeTask() {
    showTasks();
    const nameOfTask = prompt("Укажите название выполненной задачи:");
    if (tasks.includes(nameOfTask)) {
        const indexOfCompletedTask = tasks.indexOf(nameOfTask);
        isCompleted[indexOfCompletedTask] = true;
    } else {
        alert("Некорректное название задачи.");
    }
    showTasks();
}

let choice;

function main() {
    do {
        choice = +prompt(
            "Выберете действие \n1: Показать список задач \n2: Добавить задачу \n3: Пометить задачу как выполненную \n4: Удалить задачу \n0: Выйти из программы"
        );
        switch (choice) {
            case 0:
                alert("Выход из программы");
                break;
            case 1:
                showTasks();
                break;
            case 2:
                addTask();
                break;
            case 3:
                completeTask();
                break;
            case 4:
                deleteTask();
                break;
            default:
                alert("Некорректный выбор.");
        }
    } while (choice);
}

main();