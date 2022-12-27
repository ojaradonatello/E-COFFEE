const express = require("express");
const { default: mongoose } = require("mongoose");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

const authRouter = require('./routes/authRoute')

mongoose.set('strictQuery',false);
dbConnect();



app.use("/api/user", authRouter);
app.listen(PORT,() => {
    console.log(`Server is running at PORT ${PORT}`);

});