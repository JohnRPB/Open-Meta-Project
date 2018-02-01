const webCrawler = require('./crawlExp.js');
let opts = {
  log: 0,
  write: 0,
  callback: null
}
webCrawler('https://academic.oup.com/jid/article-abstract/171/6/1545/803921', opts)
.then(res => {
  console.log(res);
});
webCrawler('http://care.diabetesjournals.org/content/21/8/1288.short', opts);
webCrawler('https://www.ncbi.nlm.nih.gov/pubmed/24901001', opts);
webCrawler('https://jamanetwork.com/journals/jama/article-abstract/418442?redirect=true', opts);
webCrawler('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4357187/', opts);


