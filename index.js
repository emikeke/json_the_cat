const args = process.argv;
const { fetchBreedDescription } = require("./breedFetcher");

// index.js

const breedName = args[2];

fetchBreedDescription(breedName, (error, desc) => {
  // { null, data[0].description }
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});