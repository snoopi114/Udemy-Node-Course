const fs = require('fs')

//fs.writeFileSync('notes.txt', 'This File was created by Node.js!')

fs.appendFileSync('notes.txt', 'appending existing file!')