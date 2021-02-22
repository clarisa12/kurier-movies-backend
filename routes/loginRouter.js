const Router = require("express");
const handleSignIn = require("../controllers/authController");
const hasBody = require("../middleware/hasBody");

const authRouter = Router();

authRouter.post("/login", hasBody, handleSignIn);
module.exports = authRouter;
