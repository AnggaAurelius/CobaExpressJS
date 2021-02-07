const express = require("express");
const router = express.Router();
const { authenticated } = require("../middlewares/auth");

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

const { 
    getEmployees,
    getEmails
} = require("../controllers/employeeEmail");

const { 
    getProgrammers,
    getSkills
} = require("../controllers/programmerSkill");

const { 
    getBooks,
    getAuthors
} = require("../controllers/authorBook");

const { 
    register
} = require("../controllers/auth");

router.get("/todos", authenticated, getTodos);
router.post("/todo", addTodo);
router.patch("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

router.get("/posts", getPosts);
router.get("/post/:id", getPostsById);
router.post("/post", addPost);
router.patch("/post/:id", editPost);
router.delete("/post/:id", deletePost);

router.get("/employees", getEmployees);
router.get("/emails", getEmails);

// relasi One-to-Many || HasMany & BelongsTo
router.get("/programmers", getProgrammers);
router.get("/skills", getSkills);

// relasi Many-to-Many || BelongsT 
router.get("/books", getBooks);
router.get("/authors", getAuthors);

// auth
router.post("/register", register);

module.exports = router;