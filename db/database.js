var mongoose = require ('mongoose');

var connectionString = "mongodb://localhost/survey";

mongoose.connect(connectionString);

mongoose.connection.on('connected', function () {
  console.log('You are up and running');

  });

  mongoose.connection.on('error', function(error) {
    console.log('Uh oh, there is a problem');
  });

  mongoose.connection.on('disconnected', function() {
    console.log('You are disconnected');
  });
