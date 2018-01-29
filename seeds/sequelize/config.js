// Define order for sequelize seed files to run and run them

const cp = require('child_process');

let seedArray = ['20180129060218-Journal.js', '20180129035800-Study.js'];

for (let i = 0; i < seedArray.length; i++) {

  // Run child process with sequelize-cli seed
  let child = cp.spawn('sequelize', [
    `db:seed`,
    `--seed`,
    `${__dirname}/${seedArray[i]}`,
  ]);

  // View stdout and stderr of child process
  child.stdout.on('data', data => {
    console.log(`
    CHILD PROCESS: ${seedArray[i]}
    ${data.toString()}
    `);
  });
  child.stderr.on('data', data => {
    console.log(`
    CHILD PROCESS ERROR: ${seedArray[i]}
    ${data.toString()}
    `);
  });
}
