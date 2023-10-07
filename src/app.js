const express = require("express");
const path = require("path")
const hbs = require("hbs")
const app = express();
const port = 3000;


//Public Static web
const staticPath = (path.join(__dirname, "../public"))
const template_path = (path.join(__dirname, "../templates/views"))
const partials_path = (path.join(__dirname, "../templates/partials"))

//using template engine (hbs)
app.set('view engine', 'hbs');

//changing views with template 
app.set("views", template_path);

//registering the hbs for the use of partials
hbs.registerPartials(partials_path)
app.use(express.static(staticPath));


//routing

app.get("", (req, res)=>{
    res.render("index")
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/weather", (req, res)=>{
    res.render("weather")
})
app.get("*", (req, res)=>{
    res.status(404).render("404", {
        errMessage: "Opps! Page not found",
    })
})

app.listen(port, ()=>{
    console.log(`listning to ${port}`)
})