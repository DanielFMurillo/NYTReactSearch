const express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var routes = require("./routes/routes");
var Article = require('./models/Article.js');
var bluebird = require("bluebird");

var app = express();
var PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
    // Log any errors connecting with mongoose
    if (error) {
      console.error(error);
    }
    // Or log a success message
    else {
      console.log("mongoose connection is successful");
    }
  });


  // Start the server
app.listen(PORT, function() {
    console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
  });
  