const express = require("express");
const router = express.Router();

const {
    getTodos,
    addTodo,
    editTodo,
    deleteTodo,
} = require("../controllers/todos");

const { getPosts,
    getPostsById,
    addPost,
    editPost,
    deletePost 
} = require("../controllers/post");

const { getEmployees
} = require("../controllers/employeeEmail");

router.get("/todos", getTodos);
router.post("/todo", addTodo);
router.patch("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

router.get("/posts", getPosts);
router.get("/post/:id", getPostsById);
router.post("/post", addPost);
router.patch("/post/:id", editPost);
router.delete("/post/:id", deletePost);

router.get("/employees", getEmployees);

module.exports = router;