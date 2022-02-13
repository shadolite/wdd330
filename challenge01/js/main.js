import { Task } from "./task.js";
import { TaskList } from "./taskList.js";
import { getTasksElements } from "./utilities.js";

const tasks = new TaskList();

const renderAllTasks = () => {
  getTasksElements(tasks.getAllTasks());
};

const renderOpenTasks = () => {
  getTasksElements(tasks.getOpenTasks());
};

const renderClosedTasks = () => {
  getTasksElements(tasks.getClosedTasks());
};

function addTask(event) {
  event.preventDefault();
  let description = event.srcElement.description.value;
  tasks.addNewTask(description);
  throw new Error("Function not implemented.");
};

function updateTask(event) {
  event.preventDefault();
  throw new Error("Function not implemented.");
};

function deleteTask(event) {
  event.preventDefault();
  throw new Error("Function not implemented.");
};

const getFilterButtons = () =>
  [...document.getElementsByClassName("filter")];

function select(event) {
  getFilterButtons().forEach(el => {
    el.classList.remove('selected');
  })

  event.classList.add('selected');
}

window.onload = () => {
  getFilterButtons().forEach(element => {
    element.addEventListener("click", function () {
      select(this);
    });
  });
  document.forms['addTask'].addEventListener('submit', addTask);
}