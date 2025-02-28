const express = require('express')
const app = express()

app.listen(3030, function (req, res) {
    console.log("Server up and running on port 3030");
})

app.get("/", function (req, res) {
    res.send("All Fine :)");
})

app.get("/options", function (req, res) {
    res.status(200).json({"options": ["First API option", "Second API option", "Third API option"]})
})