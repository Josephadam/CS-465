var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
var api_router = require("./app_api/routes/index");
var handlebars = require("hbs");
require("./app_api/models/db"); // Connect to the database
var app = express();

// enable Cors
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
// register handlebars partials
handlebars.registerPartials(path.join(__dirname, "/app_server/views/partials"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Define the routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/", travelRouter);
app.use("/api", api_router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
