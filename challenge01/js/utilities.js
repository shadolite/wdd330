const getCheckInput = (checked) => {
  let checkElement = document.createElement("input");
  checkElement.type = "checkbox";
  checkElement.className = "open";
  checkElement.checked = checked;
  return checkElement;
}
const getCheckCell = (checked) => {
  let cell = document.createElement("td");
  cell.append(getCheckInput(checked));
  return cell;
}

const getDescriptionCell = (description) => {
  let cell = document.createElement("td");
  cell.className = "changeDescription";
  cell.innerText = description;
  cell.colSpan = 2;
  return cell;
}

const getDeleteIcon = () => {
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash-can";
  return deleteIcon;
}

const getDeleteButton = () => {
  let deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.appendChild(getDeleteIcon());
  return deleteButton;
}

const getDeleteCell = () => {
  let cell = document.createElement("td");
  cell.className = "deleteCell";
  cell.appendChild(getDeleteButton());
  return cell;
}

export const getTaskRow = (task) => {
  let row = document.createElement("tr");
  row.id = task.id.toString();
  row.className = "task";
  row.appendChild(getCheckCell(!task.isOpen));
  row.append(getDescriptionCell(task.description));
  row.append(getDeleteCell());
  return row;
}

export const getTaskRows = (tasks) => {
  let taskRows = [];
  tasks.forEach(task => {
    taskRows.push(getTaskRow(task))
  });
  return taskRows;
}