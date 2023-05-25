const express = require("express");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
// const path = require("path");
const connectDB = require("./config/db");
// eslint-disable-next-line unused-imports/no-unused-vars
const colors = require("colors");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use("/user", userRoutes);


app.get("/", (req, res) => {
	res.send("API is running");
});

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
	// eslint-disable-next-line no-console
	console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);


