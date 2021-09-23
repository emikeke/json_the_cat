const request = require("request");
const args = process.argv;

const catType = String(args[2]);
const urlBASE = "https://api.thecat.com/v1/breeds/search?q="

request(urlBASE + catType, function (error, response, body) {
  // Print the error if one occurred
  if (error) {
    console.log("API error: " + error);
    return;
  }
 // Print the response status code if a response was received
  if (response.statusCode !== 200) {
    console.log(' statusCode: ', response && response.statusCode);
    console.log(" problem: " + response.statusCode);
    return;
  }
  //console.log(body); // Print the HTML for the Google homepage.
  //console.log("problem: " + response.statusCode);
  let data = JSON.parse(body);
  if (data[0] === undefined){
    console.log("breed not found");
  } else {
    console.log(data[0].description);
  }
});