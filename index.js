const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.send("Hello Dumbways ok");
});

app.get("/todos", (req, res) => {
    res.send({
        message: "Response Succes",
        data: {
            todos,

        },
    });
});

app.post("/todo", (req, res) => {
    const todo = req.body;

    todos = [...todos, todo];
    res.send({
        message: "Response Succes",
        data: {
            todos,

        },
    })
})

app.patch("/todo/:id", (req, res) =>{
    const { id } = req.params;
    const editTodo = req.body; //data dari postman / user

    todos = todos.map(todo => 
        todo.id == id
        ? {
        title: editTodo.title ? editTodo.title : todo.title,
        isDone: editTodo.isDone ? editTodo : todo.isDone,
        }
    : todo
    );
    res.send({
        message: "Response Succes",
        data: {
            todos,

        },
    })
})
app.listen(port, () => {
    console.log(`Listening to port ${port}, App Ready !`);
});

let todos = [
    {
        id: 1,
        title: "Belajar express.js",
        isDone: true,
    },
    {
        id: 2,
        title: "Belajar Node.js",
        isDone: false,
    },
];

