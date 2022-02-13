import { Task } from "./task.js";
import { saveTasks, loadTasks } from "./storageHelper.js";

export class TaskList{

  constructor() {
    this.tasks = new Array();
  }

  addNewTask = (description) => {
    let task = new Task(description);
    this.tasks.push(task);
    saveTasks(this.tasks);
  }

  removeTask = (task) => {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    saveTasks(this.tasks);
  }

  udpateTask = (task) => {
    let updatedTask = this.tasks.find(t => t.id == task.id);
    updatedTask.description = task.description;
    updatedTask.isOpen = task.isOpen;
    saveTasks(this.tasks);
  }

  getTask = (id) => {
    return this.tasks.find(t => t.id == id);
  }

  getAllTasks = () => {
    return this.tasks;
  }

  getOpenTasks = () => {
    return this.tasks.filter(t => t.isOpen);
  }

  getClosedTasks = () => {
    return this.tasks.filter(t => !t.isOpen);
  }

  loadSavedTasks = () => {
    throw new Error("Function not implemented.");
  }
}
