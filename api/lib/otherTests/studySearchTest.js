const axios = require('axios');

axios.get('http://localhost:8000/api/studies/search/?&tags=future_district&study=debitis&author=amaya&journal=tactics')
  .then(response => console.log(response))
  .catch(e => console.error(e));
