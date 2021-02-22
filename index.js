var express = require("express");
var cors = require("cors");
var app = express();

require("dotenv").config();

app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "hello world" });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
