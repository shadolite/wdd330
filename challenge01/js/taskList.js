import { Task } from "./task.js";
import { saveTasks, loadTasks } from "./storageHelper.js";

export class TaskList{

  constructor() {
    this.list = new Array();
  }

  addNewTask = (description) => {
    let task = new Task(description);
    this.list.push(task);
    saveTasks(this.list);
  }

  deleteTask = (id) => {
    this.list = this.list.filter(t => t.id.toString() !== id);
    saveTasks(this.list);
  }

  udpateTask = (id, isOpen) => {
    let task = this.list.find(t => t.id.toString() == id);
    // task.description = description ? task.description : description;
    task.isOpen = isOpen;
    saveTasks(this.list);
  }

  getTask = (id) => {
    return this.list.find(t => t.id == id);
  }

  getAllTasks = () => {
    return this.list;
  }

  getOpenTasks = () => {
    return this.list.filter(t => t.isOpen);
  }

  getClosedTasks = () => {
    return this.list.filter(t => !t.isOpen);
  }

  loadSavedTasks = () => {
    this.list = loadTasks();
  }
}
