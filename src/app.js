const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');


// ---public static path----
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));


// ----Express Static web page----
const myStaticPath = path.join(__dirname, "../public");
app.use(express.static(myStaticPath));




// ----Express Dynamic HBS web page----
app.set('view engine', 'hbs');

// ----HBS template views path----
const myTemplatePath = path.join(__dirname, "../templates/views");
app.set('views', myTemplatePath);

// ----HBS template partials path----
const myPartialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(myPartialsPath);



// ----Express HBS server routing----
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather")
});
app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg:"Oops! Page Not Found"
    })
});




// ----Express server routing----
/*
app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
});
app.get("/about", (req, res) => {
    res.send("Welcome to About Page")
});
app.get("/weather", (req, res) => {
    res.send("Welcome to Weather Page")
});
app.get("*", (req, res) => {
    res.send("404 Error Page Not Found")
});
*/


// ----Port Listen----
app.listen(port, () => console.log(`Listening to Port ${port}`));