const UserModel = require("../models/UserModel");
const createUser = async (req, res) => {
    const { body } = req;

    const user = new UserModel(body);
    console.log(user);
    if (!user) {
        return res.status(400).json({ success: false });
    }

    user.setPassword(body.password);

    try {
        const jwt = user.generateJWT();
        await user.save();

        return res.status(201).json({
            success: true,
            token: jwt,
            message: "Account created!",
            userData: {
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: "Account not created!",
        });
    }
};

module.exports = createUser;
