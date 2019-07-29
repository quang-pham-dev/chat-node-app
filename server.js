var express = require("express");
var app = express();

var hostname = "localhost";
var port = 9091;

app.get("/helloworld", (req, res) => {

    res.send("<h1>Hello world !!!</h1>");
});
app.listen(port, hostname, () =>{
    console.log(`hello guys the app is running at ${hostname}: ${port} `);
});