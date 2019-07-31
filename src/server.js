import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";

//Init app
let app = express();

//Connect to MongoDB
ConnectDB();

let hostname = "localhost";
let port = 9091;

// Config view engine
configViewEngine(app);

app.get("/",  (req, res) => {
    return res.render("main/master");
});

app.get("/login-register",  (req, res) => {
    return res.render("auth/loginRegister");
});

app.listen(port, hostname, () => {
    console.log(`hello guys the app is running at ${hostname}: ${port}/`);
});
