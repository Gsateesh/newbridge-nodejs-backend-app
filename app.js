const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 80;


app.get("/", (req, res) => {
    res.send("Oops something went wrong.")
})

app.listen(PORT, (err) => {
    if (err) {
        console.log("error occurred", err);
    }
    console.log("Server started ..", PORT);
})
module.exports = app;
