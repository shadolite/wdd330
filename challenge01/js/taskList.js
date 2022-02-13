import Task from "./task";

export default class TaskList{

  constructor() {
    this.tasks = new [Task];
  }

  getTask = (id) => {
    return this.tasks.find(t => t.id == id);
  }

  addTask = (task) => {
    this.tasks.push(task);
  }

  removeTask = (task) => {
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
