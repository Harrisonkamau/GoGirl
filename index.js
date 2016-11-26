// set mongoDB uri
if(!process.env.MONGODB_URI) {
  require('dotenv').config();
}

// import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./server/routes');

// create express app
var app = express();

// set default port
var port = process.env.PORT || 3000;

// mongo configurations
mongoose.Promise = global.Promise; // use global Promise
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

// connecting to the db
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to db');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));
routes(app);


// start server
app.listen(port, ()=>{
  console.log("Listening on port: "+ port);
});
