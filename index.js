const express = require('express');
const whatthe = require("./routers/misc.js")
const path = require("path") //For staic
var serveStatic = require('serve-static')
var serveIndex = require("serve-index") // does 
var favicon = require('serve-favicon');
  const lol = require("body-parser")
  const app = express();
  app.use(lol.urlencoded({ extended: false }));
  app.set('views', __dirname + '/views');
  app.set("view engine", "ejs");

app.use(favicon(path.join(__dirname, 'static', 'img/favicon.png')));
// Rest my ass up
app.use(function(req, res, next){
  console.log("A new request received at " + Date.now());
  
  //This function call is very important. It tells that more processing is
  //required for the current request and is in the next middleware
  next();
});
app.use("/misc", whatthe)
app.get('/', (req, res) => {
  
  res.render('index')

});

app.disable('x-powered-by')
app.use("/static", express.static(path.join(__dirname, "static")), serveIndex('public/ftp', {'icons': true}))
app.get("*", (req, res) => {
 res.redirect("https://404-page.neverforget.repl.co")
})
app.listen(8080, () => {

  
})
