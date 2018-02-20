const webCrawler = async (url, options = {log: 0, write: 0, callback: null}) => {
  //todo once we have more studies remove tags that have > X% return rate
  const fs = require('fs');
  const axios = require('axios');
  let rawResponse 
  try{
  rawResponse = await axios.get(url);
  }catch(e) {
    return e;
  }

  let responseData = rawResponse.data;
  // console.log(typeof rawResponse);
  // fs.writeFileSync('./rawCrawlerResponse.txt', rawResponse.data);
  // let responseData = fs.readFileSync('./rawCrawlerResponse.txt', 'utf-8');

  //----------------------------------------
  //Filter exotic characters
  //----------------------------------------
  let curReg = /<script.+?\/script>/gi;
  let processedData 
  try{
    processedData = await responseData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }

  // console.log(intermedData);
  curReg = /<.+?>/gi;
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }

  // console.log(tagData);
  
  //----------------------------------------
  //Filter URLS
  //----------------------------------------

  curReg = /('|"|\b)http.+?('|"|\b)/gi;
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }

  // console.log(tagData);
  // curReg = /&.{2-4};/gi
  // processedData = await processedData.replace(curReg, ' ');
  // console.log(processedData);

  curReg = new RegExp('\n', 'g');
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }

  curReg = /\W+/gi;
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }

  curReg = /_+/gi;
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }


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
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }


  //----------------------------------------
  //Filter Digits
  //----------------------------------------

  curReg = /[\d]+/g;
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }


  //----------------------------------------
  //Filter common words
  //----------------------------------------

  regString = '';
  regMaster.common.forEach(x => {
    regString += '|' + x;
  });
  regString = '\\b(' + regString.substring(1) + ')\\b';
  curReg = new RegExp(regString, 'gi');
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }


  //----------------------------------------
  //Filter Internet related words
  //----------------------------------------

  regString = '';
  regMaster.internet.forEach(x => {
    regString += '|' + x;
  });
  regString = '\\b(' + regString.substring(1) + ')\\b';
  curReg = new RegExp(regString, 'gi');
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }

  curReg = /\s+/gi;
  try{
    processedData = await processedData.replace(curReg, ' ');
  }catch(e) {
    return e;
  }

  //possibly more steps

  let finalData = processedData.trim();
  // console.log(finalData);

  let hashObj = {};
  let wordArray = finalData.split(' ');
  wordArray.forEach(word => {
    let key = word.toLowerCase();
    if (!hashObj[key]) hashObj[key] = 0;
    hashObj[key]++;
  });
  let searchArray = [];
  for (let key in hashObj) {
    if (hashObj[key] > 2 && key.length > 2)
      searchArray.push([key, hashObj[key]]);
  }
  // fs.writeFileSync('./processedCrawlerResponse.txt', processedData);
  // console.log('---------------');
  // console.log(regMaster);
  // console.log(regString);
  // console.log(hashObj);
  // console.log(searchArray);
  searchArray.sort((x, y) => (x[1] > y[1] ? -1 : x[1] < y[1] ? 1 : 0));
  if(options.write){
    let writeString = '-----------------------------------\n';
    writeString += `\nurl: ${url}\n`;
    writeString += '\n--------Initial-Response-----------\n';
    writeString += '\n';
    writeString += responseData;
    writeString += '\n';
    writeString += '\n----------Final-Data---------------\n';
    writeString += '\n';
    writeString += finalData;
    writeString += '\n';
    writeString += '\n-------------Tags------------------\n';
    writeString += '\n';
    writeString += JSON.stringify(searchArray, null, 0);
    writeString += '\n';
    writeString += '\n-----------------------------------\n';
    writeString += '\n';
    writeString += `Number of tags found: ${searchArray.length}\n`;
    
    fs.writeFileSync(`./data${encodeURIComponent(url)}.txt`, writeString);
  }
  if(options.log){
    console.log('-----------------------------------')
    console.log('url: ', url);
    console.log('-----------------------------------')
    console.log(JSON.stringify(searchArray, null, 0));
    console.log('-----------------------------------')
    console.log('Number of tags found: ', searchArray.length);
  }
  // console.log(searchArray.length);
  if(options.callback){
    options.callback(searchArray);
  }
  return searchArray;
};

module.exports = webCrawler;
// webCrawler('https://academic.oup.com/jid/article-abstract/171/6/1545/803921');
// webCrawler('http://care.diabetesjournals.org/content/21/8/1288.short');
// webCrawler('https://www.ncbi.nlm.nih.gov/pubmed/24901001');
// webCrawler('https://jamanetwork.com/journals/jama/article-abstract/418442?redirect=true');
// webCrawler('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4357187/');
