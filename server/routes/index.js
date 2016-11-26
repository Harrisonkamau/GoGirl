var routes = function(app){
  app.route('/')
    .get(function(req, res){
      res.sendFile(__dirname+ "/index.html");

    })
}

module.exports = routes;
