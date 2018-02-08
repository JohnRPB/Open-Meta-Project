const postBody = require('./dbstudiesJSON.json');
const axios = require('axios');
const fs = require('fs');

axios
  .post('http://localhost:8000/api/rmarkdown/simplePlot', postBody, {
    headers: {
      'Content-Type': 'application/json',
    }, responseType: 'stream'
  })
  .then(response => {
    // console.log(response.data)
    // console.log(response.headers)
    let fileName = response.headers['content-disposition'].split('=')[1];
    console.log(response);
     response.data.pipe(fs.createWriteStream(fileName))
      .on('close', () => console.log('??'));
    // (fileName, response.data, 'base64', e=>e?console.error(e):console.log("Success"));
  })
  .catch(e => console.error(e));
