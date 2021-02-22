var mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.opqvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
        }
    )
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const dbConnection = mongoose.connection;
module.exports = dbConnection;
