let request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  //the callback function will take in 2 arguments (error, body description)
  request.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const breed = JSON.parse(body)[0];
        if (!breed) {
          callback(null, "breed not found");
        } else {
          callback(null, breed.description);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };

// if (error) {
//   console.log("error loop");
//   callback(error, null);
// } else {
//   console.log("non error loop");
//   callback(null, JSON.parse(body)[0].description);
// }
// }
