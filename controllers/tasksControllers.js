const {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
} = require("../services/taskServices");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await getTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await getTaskService(taskId);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const createdTask = await createTaskService(req.body);
    console.log("body", req.body);
    res.status(201).json(createdTask);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const updatedTask = await updateTaskService(req.body, taskId);
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await getTaskService(taskId);
    const filteredTasks = tasks.filter((task) => {
      String(task.id) != String(taskId);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
