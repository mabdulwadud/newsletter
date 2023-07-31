//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// root route
app.get('/', (req, res) =>{
    res.render('home');
});

// success page
app.get('/success', (req, res) =>{
    res.render('success');
});


// success upon post
app.post('/home', (req, res) =>{
    res.redirect('/success');
});

app.post('/success', (req, res) =>{
    res.redirect('/');
})


app.listen(3000, function () {
    console.log("Server started on port 3000");
});
  