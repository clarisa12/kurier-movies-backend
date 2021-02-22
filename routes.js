const handleSignIn = require("./controllers/authController");
const createUser = require("./controllers/userController");
const hasBody = require("./middleware/hasBody");

module.exports = function (app) {
    app.post("/login", hasBody, handleSignIn);
    app.post("/user/add", hasBody, createUser);
};
