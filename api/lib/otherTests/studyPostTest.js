const axios = require('axios');
axios
  .post('http://localhost:8000/api/studies/submit', {
    study: {
      DOI: '10.1001/jama.1997.03550160047037',
      name:
        'A Placebo-Controlled, Double-blind, Randomized Trial of an Extract of Ginkgo Biloba for Dementia',
      stats: {
        pubDate: '1997-01-01',
        sampleSize: 500,
        testStatType: 'f',
        testStatVal: 0.98344,
        stdErr: 0.898,
      },
    },
    journal: {
      name: 'JAMA',
    },
    other: {
      note: 'not real figures',
    },
    url: 'https://jamanetwork.com/journals/jama/article-abstract/418442?redirect=true',
    authors: [
      {
        name: 'Pierre L. Le Bars',
      },
      {
        name: 'Martin M. Katz',
      },
      {
        name: 'Nancy Berman',
      },
    ],
  })
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.error(e);
  });

  //structure I imageine:
  //req.body{
  //  study : {
  //    DOI: DOI,
  //    name: Study Name,
  //    stats: {
  //      pubDate: publication date
  //      sampleSize: sample size
  //      testStatType: f/t/z/eta
  //      testStatVal: value
  //      stdErr: standard error
  //    }
  //  }
  //  url: url to abstract (becomes part of payload
  //  authors: [
  //    {
  //      name: Author Name
  //      institution: Author Institution
  //      birthYear: birthYear
  //    }
  //  ],
  //  journal: {
  //    name: Journal Name
  //    publisher: Publisher of Journal
  //  }
  //  other: {
  //    becomes the rest of payload
  //  }
  //}
