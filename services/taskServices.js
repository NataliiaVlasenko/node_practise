const fs = require("fs/promises");
const crypto = require("crypto");
const {HttpError} = require('../utils/HttpError');
const path = require("path");

const db = path.join(process.cwd(), "db", "tasks.json");

const getTasksService = async () => {
  const rawData = await fs.readFile(db);
  const parcedData = JSON.parse(rawData);
  return parcedData;
};

const getTaskService = async (taskId) => {
  const tasks = await getTasksService();
  const task = tasks.find((task) => {
    return String(task.id) === String(taskId);
  });
  if (!tasks) {
    throw new HttpError(404, "this task does not exist");
  }
  return task;
};

const createTaskService = async (body) => {
  const tasks = await getTasksService();
  const newTask = {
    id: crypto.randomUUID(),
    title: body.title,
    completed: body.completed,
  };
  tasks.push(newTask);

  await fs.writeFile(db, JSON.stringify(tasks, null, 2));
  return newTask;
};

const updateTaskService = async (taskId, { title, completed }) => {
  const tasks = await getTasksService();

  const task = tasks.find((task) => {
    String(task.id) === String(taskId);
    console.log(task);
    task.title = title;
    task.completed = completed;
  });

  await fs.writeFile(db, JSON.stringify(tasks, null, 2));
  return task;
};

const deleteTaskService = async taskId => {
    const tasks = await getTasksService();
    const filteredTasks = tasks.filter(
        (task) => {
            String(task.id) === String(taskId);
            console.log(task);
            task.title = title;
            task.completed = completed;
          });
    
}


module.exports = {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
};
