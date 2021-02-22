const jwt = require("jsonwebtoken");
const getJWTTokenFromHeader = require("../jwt/utils");

const authGuard = (req, res, next) => {
    const token = getJWTTokenFromHeader(req);
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
module.exports = authGuard;
