"use strict";
export const __esModule = true;
import taskList_1 from "./taskList";
import { getTasksElements } from "./utilities";
var tasks = new taskList_1["default"]();
var renderAllTasks = function () {
    (0, getTasksElements)(tasks.getAllTasks());
};
var renderOpenTasks = function () {
    (0, getTasksElements)(tasks.getOpenTasks());
};
var renderClosedTasks = function () {
    (0, getTasksElements)(tasks.getClosedTasks());
};
var addTask = function (description) {
    throw new Error("Function not implemented.");
};
var updateTask = function (isOpen) {
    throw new Error("Function not implemented.");
};
var deleteTask = function (task) {
    throw new Error("Function not implemented.");
};
