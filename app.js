const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const cors = require('cors');



// connection
mongoose.connect("mongodb+srv://salesteamnewbridge:mseWtJrXdhhd53U4@cluster0.elwm8de.mongodb.net/service-requests");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(cors());
app.use(bodyParser.json());


const service = require('./routes/routes.service');
app.use('/service', service);


app.get("/", (req, res) => {
    res.send("Oops something went wrong.")
})


const PORT = process.env.PORT || 80;
app.listen(PORT, (err) => {
    if (err) {
        console.log("error occurred", err);
    }
    console.log("Server started ..", PORT);
})
module.exports = app;
