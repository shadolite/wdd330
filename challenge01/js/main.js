import { TaskList } from "./taskList.js";
import { getTaskRows } from "./utilities.js";

const tasks = new TaskList();

const clearTaskElements = () => {
  let taskRows = [...document.getElementsByClassName('task')];
  taskRows.forEach(row => {
    row.parentNode.removeChild(row);
  });
};

const renderTasks = (filterType) => {
  clearTaskElements();
  const footerRow = document.getElementById('taskFooterRow');
  switch(filterType){
    case "open":
      getTaskRows(tasks.getOpenTasks()).forEach(taskRow => {
        footerRow.parentNode.insertBefore(taskRow, footerRow);
      })
      break;
    case "closed":
      getTaskRows(tasks.getClosedTasks()).forEach(taskRow => {
        footerRow.parentNode.insertBefore(taskRow, footerRow);
      })
      break;
    default:
      getTaskRows(tasks.getAllTasks()).forEach(taskRow => {
        footerRow.parentNode.insertBefore(taskRow, footerRow);
      })
  }
};

function addTask(event) {
  event.preventDefault();
  let description = event.srcElement.description.value;
  tasks.addNewTask(description);
  renderTasks("all");
  updateTaskFooter();
};

function updateTaskHandler(event) {
  let taskID;
  let isOpen;
  tasks.updateTask(taskID, isOpen)
  updateTaskFooter();
};

function deleteTaskHandler(event) {
  let taskID;
  tasks.deleteTask(taskID);
  renderTasks("all");
  updateTaskFooter();
};

const getFilterButtons = () =>
  [...document.getElementsByClassName("filter")];

const updateSelectedClass = (event) => {
  getFilterButtons().forEach(el => {
    el.classList.remove('selected');
  })

  event.classList.add('selected');
}

function filterHandler(event) {
  updateSelectedClass(event);
  let filterType = event;
  renderTasks(filterType);
}

const addFilterListeners = () => {
  getFilterButtons().forEach(element => {
    element.addEventListener("click", function () {
      filterHandler(this);
    });
  });
}

const addNewTaskListener = () => {
  document.forms['addTask'].addEventListener('submit', addTask);
}

const getCheckboxInputs = () =>
  [...document.getElementsByClassName('open')];

const addCheckboxListener = () => {
  getCheckboxInputs().forEach(el => {
    el.addEventListener("change", function () {
      updateTaskHandler(this);
    })
  });
}

const getDeleteButtons = () =>
  [...document.getElementsByClassName('delete')];

const addDeleteTaskListener = () => {
  getDeleteButtons().forEach(el => {
    el.addEventListener("click", function () {
      deleteTaskHandler(this);
    })
  })
}

const renderSavedTasks = () => {
  tasks.loadSavedTasks();
  renderTasks("all");
  addCheckboxListener();
  addDeleteTaskListener();
}

const updateTaskFooter = () => {
  let taskCountEl = document.getElementById("taskCount");
  let taskCount = tasks.getOpenTasks().length;
  taskCountEl.innerText = taskCount < 0 ? `${taskCount} tasks left` : "No open tasks";
}

window.onload = () => {
  addFilterListeners();
  addNewTaskListener();
  renderSavedTasks();
  updateTaskFooter();
}