var express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

//static (css, js) files
app.use(express.static("public"));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlbars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// controller
var routes = require("./controllers/burgers_controller");

app.use(routes);


//server connection
app.listen(PORT, function() {
    console.log("server listening on " + PORT);
})