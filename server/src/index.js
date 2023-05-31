const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
const db = require("./models");

// db.sequelize.sync({ alter: true });

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
