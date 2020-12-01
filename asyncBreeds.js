const fs = require('fs');

const breedDetailsFromFile = function (breed, action) {
  console.log('breedDetailFrom File: Calling readFile ...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (err, data) => {
    if(err) {
      console.log(undefined);
    }
    console.log("In readFile's Callback: it has the data.");
    action(data)
  })
};

const printOut = breed => {
  console.log("Return Value:", breed)
}

// breedDetailsFromFile('Balinese', printOut);

module.exports = breedDetailsFromFile;