const Router = require("express");
const createUser = require("../controllers/userController");
//const authGuard = require() "../middleware/authGuard");
const hasBody = require("../middleware/hasBody");

const userRouter = Router();

userRouter.post("/add", hasBody, createUser);

module.exports = userRouter;
