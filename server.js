var http = require("http");
//var url = require("url");
var express = require("express");
var app = express.createServer;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// gets data from POST

var port = process.env.PORT || 8080;
// sets port

var router = express.Router(); // instance of express router

router.get('/',function(req, res){
  res.json({message: 'welcome to api'});
})
// defines the "router" route



/*function start(route){
  http.createServer(function(request,response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved.");
    route(pathname);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Choose server name");
   response.end();
  }).listen(port);

console.log("Server started");
}*/

app.use('/api', router); // api is prefix
app.listn(port);
console.log("Now up on " + port);
//exports.start = start;

// put js into html:
//<script src="../server.js"</script>