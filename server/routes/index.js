var path = require('path');
var routes = function(app){
  app.route('/')
    .get(function(req, res){
      res.sendFile("index.html", {root: path.join(__dirname, '../../public')})

    })
    app.route('/report')
    .get(function(req, res){
      res.sendFile("reportviolence.html", {root: path.join(__dirname, '../../public')});
    });
    
}

module.exports = routes;
