const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const inventory = require("./routes/inventory.js");
const authRoute = require("./routes/auth.js");
const createAccount = require("./routes/createAccount")
const login = require('./routes/login')

dotenv.config();

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

//For landing bikes
app.use("/inventory", inventory);

// For email verification codes
app.use("/auth", authRoute);

// For creating accounts
app.use("/users", createAccount)

// For login
app.use('/users', login)

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});