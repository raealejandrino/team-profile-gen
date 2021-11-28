const Team = require('./lib/Team');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site');

const testTeam = new Team();

// console.log(testTeam.initializeManager());

testTeam.initializeManager()
// .then(data => {
//     writeFile(data)
// });




