import express from "express";
let app = express();

let hostname = "localhost";
let port = 9091;

app.get("/helloworld", (req, res) => {

    res.send("<h1>Hello world !!!</h1>");
});
app.listen(port, hostname, () =>{
    console.log(`hello guys the app is running at ${hostname}: ${port}/`);
});
