const express = require("express");
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created",
    })

})

app.get("/todo", async function(req,res){
    const todo = await todo.find({});

    res.json({
        todos
    })

});

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res,json({
        msg: "Todo marked as completed"
    })


})
app.listen(5001);

