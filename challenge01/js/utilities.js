import Task from "./task";

export const getJSONFromTask = (task) => {
  throw new Error("Function not implemented.");
}

export const getTaskFromJSON = (task) => {
  throw new Error("Function not implemented.");
}

const getCheckCell = (checked) => {
  let checkElement = document.createElement("input");
  checkElement.type = "checkbox";
  checkElement.className = "changeIsOpen";
  checkElement.checked = checked;

  let cell = document.createElement("td");
  cell.append(checkElement);
  return cell;
}

const getTaskCell = (description) => {
  let cell = document.createElement("td");
  cell.className = "changeDescription";
  cell.outerText = description;
  cell.colSpan = 2;
  return cell;
}

const getDeleteCell = () => {
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash-can";

  let cell = document.createElement("td");
  cell.className = "delete";
  cell.appendChild(deleteIcon);
  return cell;
}

export const getTaskRow = (task) => {
  let row = document.createElement("tr");
  row.id = task.id.toString();
  row.className = "task";
  row.appendChild(getCheckCell(task.isOpen));
  row.append(getTaskCell(task.description));
  row.append(getDeleteCell());
  return row;
}

export const getTasksElements = (tasks) => {
  throw new Error("Function not implemented.");
}