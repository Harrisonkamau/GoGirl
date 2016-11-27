var path = require('path');

var routes = function(app){
  app.route('/')
    .get(function(req, res){
      res.sendFile(__dirname+ "/index.html");

    })
    app.route('/report')
    .get(function(req, res){
      res.sendFile('/home/harry/Documents/hackathons/GoGirl/public/reportviolence.html');

    });
    
}

module.exports = routes;
