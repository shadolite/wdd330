import Task from "./task";
import TaskList from "./taskList";
import { getTasksElements } from "./utilities";

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

const addTask = (description) => {
  throw new Error("Function not implemented.");
}

const updateTask = (isOpen) => {
  throw new Error("Function not implemented.");
}

const deleteTask = (task) => {
  throw new Error("Function not implemented.");
}