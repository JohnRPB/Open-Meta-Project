const webCrawler = async url => {
  const fs = require('fs');
  const axios = require('axios');
  let rawResponse = await axios.get(url)
  let responseData = rawResponse.data;
  // console.log(typeof rawResponse);
  fs.writeFileSync('./rawCrawlerResponse.txt', rawResponse.data);
  // let responseData = fs.readFileSync('./rawCrawlerResponse.txt', 'utf-8');
  
  //----------------------------------------
  //Filter weird characters
  //----------------------------------------

  let curReg = new RegExp('\n', 'g');
  let processedData = await responseData.replace(curReg, ' ');
  curReg = /\W+/gi;
  processedData = await processedData.replace(curReg, ' ');
  curReg = /_+/gi;
  processedData = await processedData.replace(curReg, ' ');
  
  //----------------------------------------
  //Require master json object
  //----------------------------------------

  const regMaster = require('./regexKeeper.json');
  
  //----------------------------------------
  //Filter HTML remains
  //----------------------------------------

  let regString = '';
  regMaster.html.forEach(x => {
    regString += '|' + x;
  });
  regString = '\\b(' + regString.substring(1) + ')\\b';
  curReg = new RegExp(regString, 'gi');
  processedData = await processedData.replace(curReg, " ");
  
  //----------------------------------------
  //Filter Digits
  //----------------------------------------

  curReg = /[\d]+/g;
  processedData = await processedData.replace(curReg, ' ');
  
  //----------------------------------------
  //Filter common words
  //----------------------------------------

  regString = '';
  regMaster.common.forEach(x => {
    regString += '|' + x;
  });
  regString = '\\b(' + regString.substring(1) + ')\\b';
  curReg = new RegExp(regString, 'gi');
  processedData = await processedData.replace(curReg, ' ');

  //----------------------------------------
  //Filter Internet related words
  //----------------------------------------

  regString = '';
  regMaster.internet.forEach(x => {
    regString += '|' + x;
  });
  regString = '\\b(' + regString.substring(1) + ')\\b';
  curReg = new RegExp(regString, 'gi');
  processedData = await processedData.replace(curReg, ' ');

  //possibly more steps

  let finalData = processedData.trim();

  let hashObj = {};
  let wordArray = finalData.split(' ');
  wordArray.forEach(word => {
    if(!hashObj[word]) hashObj[word] = 0;
    hashObj[word]++;
  });
  let searchArray = [];
  for(let key in hashObj){
    if(hashObj[key] > 1 && key.length > 1) searchArray.push([key, hashObj[key]]);
  }
  // fs.writeFileSync('./processedCrawlerResponse.txt', processedData);
  console.log(finalData);
  // console.log('---------------');
  // console.log(regMaster);
  // console.log(regString);
  // console.log(hashObj);
  // console.log(searchArray);
  searchArray.sort((x, y) => x[1] > y[1] ? -1 : x[1] < y[1] ? 1 : 0);
  console.log(JSON.stringify(searchArray, null, 0));
}

webCrawler('https://academic.oup.com/jid/article-abstract/171/6/1545/803921');
