const { Router } = require('express');
const { getAllUsers } = require("../controllers/Users/getAllUsers");
const { getByName } = require("../controllers/Users/getUsersbyName");
const { postUser } = require("../controllers/Users/postUser");
const { getById } = require("../controllers/Users/getUsersById")
const { validatePostUser } = require("../middlewares/validatePostUser");
const userRouter = Router();

userRouter.get("/", getByName, getAllUsers)
userRouter.get("/:id", getById)
userRouter.post("/", validatePostUser, postUser)


module.exports = userRouter