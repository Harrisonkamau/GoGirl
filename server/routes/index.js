var path = require('path');
// var public = "/home/harry/Documents/hackathons/GoGirl/public";
var routes = function(app){
  // app.route('/')
  //   .get(function(req, res){
    
  //     res.sendFile(__dirname+ "/index.html");


  //   }),
    app.route('/report')
    .get(function(req, res){
      // res.sendFile('/home/harry/Documents/hackathons/GoGirl/public/reportviolence.html');

      res.sendFile("reportviolence.html", {root: path.join(__dirname, '../../public')});
      // console.log(__dirname);
    });
    
}

module.exports = routes;
