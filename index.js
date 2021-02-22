const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dbConnection = require("./db/dbConnection");
const routes = require("./routes");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
require("./routes")(app);

dbConnection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
