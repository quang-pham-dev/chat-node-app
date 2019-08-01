import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";

//Init app
let app = express();

//Connect to MongoDB
ConnectDB();

let hostname = "localhost";
let port = 9091;

// Config view engine
configViewEngine(app);

// Init all routes
initRoutes(app);

app.listen(port, hostname, () => {
    console.log(`hello guys the app is running at ${hostname}: ${port}/`);
});
