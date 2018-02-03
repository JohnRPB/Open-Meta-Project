const express = require('express');
let router = express.Router();

const axios = require('axios');
// const fs = require('fs');

router.get('/', (req, res, next) => {
  console.log('hello');
});
router.get('/:func/:number', (req, res, next) => {
  axios
    .get(`https://genetinderholm.ocpu.io/ocpuTest/R/${req.params.func}/print`)
    .then(response => {
      let rdocumentString = '';
      let functionDef = `${response.data}`;
      functionDef = functionDef.replace(new RegExp('<.+>'), '');
      rdocumentString +=
        '# Auto-Generated Rmarkdown Document \n\n```{r block1}';
      rdocumentString += `\n\n${req.params.func} <- ${functionDef}\n${
        req.params.func
      }(${req.params.number})\n`;
      rdocumentString += '```';
      // fs.writeFile('autogen.Rmd', rdocumentString, 'utf8', err => {
      // if(err) next(err);
      // console.log('File Written');
      // })
    })
    .catch(e => console.error(e));
});

module.exports = router;
