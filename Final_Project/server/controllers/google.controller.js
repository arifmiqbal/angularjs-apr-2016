'use strict';

var GoogleLocations = require('google-locations');


exports.search = function(req, res) {
  
  
  // var GoogleLocations = require('google-locations');
  var locations = new GoogleLocations('AIzaSyCw9eW9FnzxYHzzynrQN3WL3hxTSG_OW8c');
  //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=pizza&name=cruise&key=AIzaSyCw9eW9FnzxYHzzynrQN3WL3hxTSG_OW8c
  var inputKeyword = req.query.type;
  var inputLocation = req.query.location;
  var inputRadius = '250';

  console.log("inputKeyword", inputKeyword);
  console.log("inputLocation", inputLocation);
  
  locations.search({type: inputKeyword, location: [inputLocation], radius: inputRadius}, function(err, googleResponse) {
    
    if(err){
     console.log('Error: ', err);
    }
    else{
     //console.log('request: sadfsadfsadf sadfsadf sdf sadfsadfsadfsadfsadf', req);
     console.log("search: ", googleResponse.results);
    }

    res.json(googleResponse.results);
   
    // locations.details({placeid: response.results[0].place_id}, function(err, response) {
    //   console.log("search details: ", response.result.name);
    // });
  });


  // var server = http.createServer(requestListener);
  // server.listen(8080, function(){
  //  console.log('shhhhh im listening');
  //  console.log('Server Listening at http://localhost:%s', server.address().port);
  // });


  // console.log(req.query);

  // // Sample Request
  // // http://localhost:8080/api/yelp/search?term=food&location=11221

  // yelp.search({term: req.query.term, location: req.query.location}, function(error, data) {
  //   res.send(data);
  // });
};