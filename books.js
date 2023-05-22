const express = require("express");
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("Body")
});

app.listen(3000, function(){
    console.log("Sever started on port 3000");
});