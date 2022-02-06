import { Guid } from "guid-ts";
import Task from "./task";

export default class TaskList{
  tasks: Array<Task>;

  constructor() {
    this.tasks = new Array<Task>();
  }

  getTask = (id: Guid) => {
    return this.tasks.find(t => t.id == id);
  }

  addTask = (task: Task) => {
    this.tasks.push(task);
  }

  removeTask = (task: Task) => {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
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

  saveTaskList = () => {
    throw new Error("Function not implemented.");
  }

  openTaskList = () => {
    throw new Error("Function not implemented.");
  }
}
