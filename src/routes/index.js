const express = require("express");
const router = express.Router();

const {
    getTodos,
    addTodo,
    editTodo,
    deleteTodo,
} = require("../controllers/todos");

router.get("/todos", getTodos);
router.post("/todo", addTodo);
router.patch("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

module.exports = router;