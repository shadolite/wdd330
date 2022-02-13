const tasksKey = "tasks";

export const saveTasks = (tasks) => {
  let storageItem = JSON.stringify(tasks);
  window.localStorage.setItem(tasksKey, storageItem);
}

export const loadTasks = () => {
  let storageItem = window.localStorage.getItem(tasksKey);
  if (!storageItem)
    return [];
  return JSON.parse(storageItem);
}