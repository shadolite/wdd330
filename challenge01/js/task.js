"use strict";
exports.__esModule = true;
var Task = /** @class */ (function () {
    function Task(description) {
        this.id = new Date();
        this.description = description;
        this.isOpen = true;
    }
    return Task;
}());
exports["default"] = Task;
