const fs = require('fs');

var md = fs.readFileSync('./test.md', 'utf-8');

fs.writeFileSync('./1.md', md.replace(/\\n/g, '\n'));
