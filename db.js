const mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/todos");

 const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean
 })

 const todo = mongoose.model('todo', todoSchema);