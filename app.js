const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home")
})

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        app.listen(8000, () => {
            console.log("Application running on port 8000");
        })
    })
    .catch(e => {
        console.log(e);
    })
