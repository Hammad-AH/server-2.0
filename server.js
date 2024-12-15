const express = require("express");
const app = express();

app.get("/users", (req , res) => {
    let users = req.query.name;
    console.log("Users", users);
    res.status(200).json({message:users})
});

app.listen(5000);

app.get("/users/:name", (req , res) => {
    let users = req.params.name;
    console.log("Users", users);
    res.status(200).json({message:users})
});