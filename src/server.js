import express from "express";
import ConnectDB from "./config/connectDB"
import ContactModel from "./models/contact.model"

let app = express();

//Connect to MongoDB
ConnectDB();

let hostname = "localhost";
let port = 9091;

app.get("/test-database", async (req, res) => {
    try {
        let item = {
            userId: "1212121",
            contactId: "12121212dd",
        }
        let contact = await ContactModel.createNew(item);
        res.send(contact);
    } catch (error) {
        console.log(error)
    }
});

app.listen(port, hostname, () => {
    console.log(`hello guys the app is running at ${hostname}: ${port}/`);
});
