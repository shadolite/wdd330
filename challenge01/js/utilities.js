"use strict";
exports.__esModule = true;
exports.getTasksElements = exports.getTaskRow = exports.getTaskFromJSON = exports.getJSONFromTask = void 0;
var getJSONFromTask = function (task) {
    throw new Error("Function not implemented.");
};
exports.getJSONFromTask = getJSONFromTask;
var getTaskFromJSON = function (task) {
    throw new Error("Function not implemented.");
};
exports.getTaskFromJSON = getTaskFromJSON;
var getCheckCell = function (checked) {
    var checkElement = document.createElement("input");
    checkElement.type = "checkbox";
    checkElement.className = "changeIsOpen";
    checkElement.checked = checked;
    var cell = document.createElement("td");
    cell.append(checkElement);
    return cell;
};
var getTaskCell = function (description) {
    var cell = document.createElement("td");
    cell.className = "changeDescription";
    cell.outerText = description;
    cell.colSpan = 2;
    return cell;
};
var getDeleteCell = function () {
    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can";
    var cell = document.createElement("td");
    cell.className = "delete";
    cell.appendChild(deleteIcon);
    return cell;
};
var getTaskRow = function (task) {
    var row = document.createElement("tr");
    row.id = task.id.toString();
    row.appendChild(getCheckCell(task.isOpen));
    row.append(getTaskCell(task.description));
    row.append(getDeleteCell());
    return row;
};
exports.getTaskRow = getTaskRow;
var getTasksElements = function (tasks) {
    throw new Error("Function not implemented.");
};
exports.getTasksElements = getTasksElements;
