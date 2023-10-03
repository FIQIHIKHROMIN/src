const express = require("express")
const router = express.Router()
const TodosController = require("../controllers/Todo.js")

router.get("/", TodosController.getTodos)

router.post("/todo", TodosController.addTodos)

router.delete("/todos/:todoId", TodosController.deleteTodos)

router.put("/todos/:todoId", (req, res) => {})

module.exports = router;