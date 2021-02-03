const express = require("express");
const router = express.Router();

const {getTodos} = require("../controllers/todos");

router.get("/todos", getTodos);

module.exports = router;