const express = require('express');
let router = express.Router();
let JSZip = require('jszip');
let fs = require('fs');

const axios = require('axios');
// const fs = require('fs');

router.get('/', (req, res, next) => {
  // console.log('hello');
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

router.post('/:func', (req, res, next) => {
  axios
    .get(`https://johnrpb.ocpu.io/openCPU_test/R/${req.params.func}/print`)
    .then(response => {
      let rdocumentString = `---\ntitle: "${req.params.func}"\n\n`;
      let functionDef = `${response.data}`;
      functionDef = functionDef.replace(new RegExp('<.+>'), '');
      rdocumentString += '```{r, echo=FALSE}';
      rdocumentString += `\n\n${req.params.func} <- ${functionDef}\n`;
      rdocumentString +=
        "```\n\n```{r echo=FALSE}\nlibrary(knitr)\nread_chunk('json.R')\n```\n\n```{r echo=FALSE}\n<<jsondata>>\n";
      rdocumentString += `${req.params.func}(jsondata)\n`;
      rdocumentString += '```\n';
      let rdataString = '## @knitr jsondata\n\njsondata <- ';
      rdataString += `'${JSON.stringify(req.body)}'`;
      const zip = new JSZip();
      const results = zip.folder('results');
      results.file(`${req.params.func}.Rmd`, rdocumentString);
      results.file('json.R', rdataString);
      res.setHeader(
        'Content-disposition',
        `attachment; filename=${req.params.func}.zip`,
      );
      res.setHeader('Content-type', 'application/octet-stream');
      res.writeHead(200);
      console.log(results);
      results
        .generateNodeStream({type: 'nodebuffer', compression: "DEFLATE",
    compressionOptions: {
        level: 9
    }, streamFiles: true})
        .pipe(res)
        .on('finish', () => {
          res.end();
        });
    })
    .catch(e => console.error(e));
});

module.exports = router;
