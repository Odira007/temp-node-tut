// interacting with file system. The module name is fs
// SYNCHRONOUS
const { readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first)
console.log(second)

writeFileSync('./content/res-sync.txt', 
    `This is the result: ${first}, ${second}`, 
    { flag: 'a' }
);
console.log('done');
console.log('starting the next');
