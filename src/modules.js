// ---------------------------------------------------------
// Dynamic module builder! 
// 2018-01-31 08:23
// ---------------------------------------------------------

const axios = require('axios');
const fs = require('fs');

const getData = async () => {
  let url = "https://genetinderholm.ocpu.io/ocpuTest/R/${req.params.func}/print";
  axios.get(`https://raw.githubusercontent.com/JohnRPB/openCPU_test/master/R/test_plot.R`)
      .then(response => {
        let rdocumentString = '';
        let functionDef = `${response.data}`;
        // console.log("------------------- START functionDef -------------------");
        // console.log(functionDef);
        // console.log("-------------------- END functionDef --------------------");
        fs.writeFile('auto_modules.js', functionDef, 'utf8', err => {
          if(err) next(err);
          // console.log('File Written');
        })
      })
      .catch(e => console.error(e));

}

getData();


