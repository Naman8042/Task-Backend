const express = require("express")
const router = express.Router()

const{Create,getById,update,Delete,getAll} = require("../controllers/Task")

router.post("/tasks",Create)
router.get("/tasks/:id",getById)
router.get("/tasks",getAll)
router.put("/tasks/:id",update)
router.delete("/tasks/:id",Delete)

module.exports = router