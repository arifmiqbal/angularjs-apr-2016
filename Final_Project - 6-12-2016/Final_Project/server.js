'use strict';
var config = require('./server/config/config');


var app = require('./server/init/express')();
var server = app.listen(8080, function () {
  console.log('Server Listening at http://localhost:%s', server.address().port);
});










// var http = require('https');
// var GoogleLocations = require('google-locations');

// var requestListener = function (req, res) {
//   res.writeHead(200);
//   //res.end('Hello, World!\n');
// }

// var locations = new GoogleLocations('AIzaSyCw9eW9FnzxYHzzynrQN3WL3hxTSG_OW8c');

// //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=pizza&name=cruise&key=AIzaSyCw9eW9FnzxYHzzynrQN3WL3hxTSG_OW8c
// var inputKeyword = config.apiinput.inputkeyword;
// var inputLocation = config.apiinput.inputlocation;
// var inputRadius = config.apiinput.inputradius;


//  locations.search({keyword: inputKeyword, location: [inputLocation], radius: inputRadius}, function(err, response) {
  
// 	  if(err){
// 	  	console.log('Error: ', err);
// 	  }
// 	  else{
// 	  	console.log("search: ", response.results);
// 	  }
	 
// 	  locations.details({placeid: response.results[0].place_id}, function(err, response) {
// 	    console.log("search details: ", response.result.name);
// 	  });
// });



// var mongoose = require('mongoose');

// var db = mongoose.connect(config.db.uri, config.db.options, function(err) {
//   if (err) {
//     console.error('Could not connect to MongoDB!');
//     console.log(err);
//   }
// });
// mongoose.connection.on('error', function(err) {
//   console.error('MongoDB connection error: ' + err);
//   process.exit(-1);
//   }
// );




// var http = require('https');
// var requestListener = function (req, res) {
//   res.writeHead(200);
//   //res.end('Hello, World!\n');
// }

// var GoogleLocations = require('google-locations');
// var locations = new GoogleLocations('AIzaSyCw9eW9FnzxYHzzynrQN3WL3hxTSG_OW8c');
// //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=pizza&name=cruise&key=AIzaSyCw9eW9FnzxYHzzynrQN3WL3hxTSG_OW8c
// var inputKeyword = 'pizza';
// var inputLocation = '40.7547188,-73.9732749';
// var inputRadius = '250';


// locations.search({keyword: inputKeyword, location: [inputLocation], radius: inputRadius}, function(err, response) {
  
//   if(err){
//   	console.log('Error: ', err);
//   }
//   else{
//   	console.log("search: ", response.results);
//   }
 
//   locations.details({placeid: response.results[0].place_id}, function(err, response) {
//     console.log("search details: ", response.result.name);
//   });
// });


// var server = http.createServer(requestListener);
// server.listen(8080, function(){
// 	console.log('shhhhh im listening');
// 	console.log('Server Listening at http://localhost:%s', server.address().port);
// });







//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyDKE8SjVoSAd8iWuN1XHY6Vbi7USPtSafM


// var server = http.createServer(requestListener);
// server.listen(8080, function(){
// 	var host = server.address().address;
//   	var port = server.address().port;
// 	console.log('Server Listening at http://%s:%s', host, port);	
// });


//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'


//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyCw9eW9FnzxYHzzynrQN3WL3hxTSG_OW8c





// exports.randeats = function(req, res){
//   var key = req.query.key;
//   var location = '08823';
//   //encodeURIComponent(req.query.location);
//   var radius = 500;
//   var sensor = false;
//   var types = "restaurant";
//   var keyword = "fast";

//   var https = require('https');
//   var url = "maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + "&radius=" + radius + "&sensor=" + sensor + "&types=" + types + "&keyword=" + keyword;
//     console.log(url);
//   https.get(url, function(response) {
//     var body ='';
//     response.on('data', function(chunk) {
//       body += chunk;
//     });

//     response.on('end', function() {
//       var places = JSON.parse(body);
//       var locations = places.results;
//       var randLoc = locations[Math.floor(Math.random() * locations.length)];

//       res.json(randLoc);
//     });
//   }).on('error', function(e) {
//     console.log("Got error: " + e.message);
//   });
// };








// var config = require('./server/config/config');
// var mongoose = require('mongoose');

// var db = mongoose.connect(config.db.uri, config.db.options, function(err) {
//   if (err) {
//     console.error('Could not connect to MongoDB!');
//     console.log(err);
//   }
// });
// mongoose.connection.on('error', function(err) {
//   console.error('MongoDB connection error: ' + err);
//   process.exit(-1);
//   }
// );

// var app = require('./server/init/express')(db);
// var server = app.listen(8080, function () {
//   console.log('Server Listening at http://localhost:%s', server.address().port);
// });

