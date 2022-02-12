"use strict";
exports.__esModule = true;
var TaskList = /** @class */ (function () {
    function TaskList() {
        var _this = this;
        this.getTask = function (id) {
            return _this.tasks.find(function (t) { return t.id == id; });
        };
        this.addTask = function (task) {
            _this.tasks.push(task);
        };
        this.removeTask = function (task) {
            _this.tasks = _this.tasks.filter(function (t) { return t.id !== task.id; });
        };
        this.getAllTasks = function () {
            return _this.tasks;
        };
        this.getOpenTasks = function () {
            return _this.tasks.filter(function (t) { return t.isOpen; });
        };
        this.getClosedTasks = function () {
            return _this.tasks.filter(function (t) { return !t.isOpen; });
        };
        this.saveTaskList = function () {
            throw new Error("Function not implemented.");
        };
        this.openTaskList = function () {
            throw new Error("Function not implemented.");
        };
        this.tasks = new Array();
    }
    return TaskList;
}());
exports["default"] = TaskList;
