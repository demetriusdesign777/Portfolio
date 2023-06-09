// Dependencies
const express = require("express");
const compression = require("compression");
const mailer = require("./helpers/mailer.js");

// Modules
const app = express();

// Sets ejs as the template engine
app.set("view engine", "ejs");

// Use express built in parser
app.use(express.urlencoded({ extended: "true" }));

// Use express json parser
app.use(express.json());

// Read the public file for images, css & js files
app.use(express.static("public"));

// Enables Gzip compression
app.use(compression());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/The-Plant-Based-Experiment", (req, res) => {
  res.render("./projects/The-Plant-Based-Experiment/index");
});

app.get("/Procycle", (req, res) => {
  res.render("./projects/Procycle/index");
});

app.post("/mailer", (req, res) => {
  console.log(req.body);
  mailer(req.body);
  res.json({ message: "Email sent successfully!" });
});

app.listen(8080);
