const express = require('express');
const {tasksRouter} = require('./routes/tasksRouter');

const app = express();

app.use(express.json());
app.use('/tasks', tasksRouter);

app.use((err, res, req, next )=> {
    console.log(err.message);
    res
    .status(err.statusCode || 500)
    .json(err.message || "oops...");

})

module.exports = app;