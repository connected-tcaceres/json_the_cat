let request = require("request");
const args = process.argv.slice(2);

request.get(
  `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  (error, response, body) => {
    // if (error) {
    //   console.log("Failed to request details: ", error);
    // } else {
    //   const data = JSON.parse(body);
    //   console.log(data[0].description);
    // }
    if (error) {
      return console.log("Failed to request details: ", error);
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      console.log(breed.description);
    } else {
      console.log(`Failed to find breed ${breedName}`);
    }
  }
);
