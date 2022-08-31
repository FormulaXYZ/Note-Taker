const router = require('express').Router();
const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
  /** 
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  writeFile(destination, JSON.stringify(content, null, 4)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};


router.get('/notes', (req, res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

});

router.post('/notes', (req, res) =>{ 
  console.log(req.body);
  readFromFile("./db/db.json").then(data => {
    const dataArr = JSON.parse(data)
    dataArr.push(req.body);
    writeToFile('./db/db.json',dataArr).then( ()=> {
      return res.json(dataArr);

    })
  
   })
});
 


module.exports = router;

