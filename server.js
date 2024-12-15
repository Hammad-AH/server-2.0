const express = require("express");
const app = express();

app.get("/search", (req , res) => {
    let search = req.query;
    console.log("Search", search);
    res.status(200).json({message:"success"})
});

app.listen(5000);