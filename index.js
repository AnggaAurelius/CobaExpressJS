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
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}, App Ready !`);
});

const todos = [
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

