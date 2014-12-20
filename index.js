var express = require('express');
var app = express();
var game = require('game-sample');
var uuid = require('node-uuid');
//var mongoose = require('mongoose');
var fs = require('fs');
var Firebase = require("firebase");

/*mongoose.connect('mongodb://localhost:test/');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback()){
  
};*/

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.send(game());
})

app.get('/start', function(request, response){
  
  var randomID = uuid.v4();
  response.redirect('https://secret-river-3521.herokuapp.com/' + randomID);
  app.get('/' + randomID, function(request, response){
    console.log("WORKING");
    //response.sendFile('gamePage.html')
    /*fs.readfile('./gamePage.html', function(err, html){
      if(err){
        throw err;
      }
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();*/
    //app.use(express.static(String.raw()));
    response.sendFile(__dirname + '/gamePage.html');
    
  });
})



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});


/*<form>
  Server Name <br>
  <input type="text" name="Server">
  <br>
   <input type="button" name = "submit" value="Submit" onclick="checkScript()">
  </form>
*/