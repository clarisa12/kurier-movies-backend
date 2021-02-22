const UserModel = require("../models/UserModel");

const handleSignIn = async (req, res) => {
    const { username, password } = req.body;
    const message = "Username or password incorrect!";
    const user = await UserModel.findOne({ username });

    if (!user || !password) res.status(401).json({ success: false, message });

    if (!user.validPassword(password))
        res.status(401).json({ success: false, message });

    res.json({
        success: true,
        userData: {
            username: user.username,
            email: user.email,
        },
        token: user.generateJWT(),
    });
};
module.exports = handleSignIn;
