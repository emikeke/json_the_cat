const request = require("request");
//const args = process.argv;

//const catType = String(args[2]);
//const urlBASE = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  const urlBASE = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(urlBASE, function(error, response, body) {
  // Print the error if one occurred
    if (error) {
      //return "API error: " + error;
      return callback(error, null);
    }
    // Print the response status code if a response was received
    //if (response.statusCode !== 200) {
    //return " problem: " + response.statusCode;
    //}
    //console.log(body); // Print the HTML for the Google homepage.
    //console.log("problem: " + response.statusCode);
    let data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback(null, "breed not found");
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };