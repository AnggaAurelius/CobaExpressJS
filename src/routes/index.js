const express = require("express");
const router = express.Router();

const {
    getTodos,
    addTodo,
    editTodo,
    deleteTodo,
} = require("../controllers/todos");

const { getPosts, getPostsById,addPost } = require("../controllers/post");

router.get("/todos", getTodos);
router.post("/todo", addTodo);
router.patch("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

router.get("/posts", getPosts);
router.get("/post/:id", getPostsById);
router.post("/post", addPost);

module.exports = router;