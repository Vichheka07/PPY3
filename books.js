const { render } = require("ejs");
const express = require("express");
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("Body")
});

app.get("/login", function(req, res){
    // res.redirect("/login")
    res.render('login');
});
app.get("/sign_up", function(req, res){
    res.render('Sign_up');
});

app.listen(5000, function(){
    console.log("Sever started on port 3000");
});