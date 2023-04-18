// ASYNCHRONOUS
// the ansynchronous method works with a callback
// a callback is essentially something that runs after whatever functionality were running is complete
const { readFile, writeFile} = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = data;
    readFile('./content/second.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = data;
        writeFile('./content/res-async.txt', `This is the result: ${first}, ${second}`, (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task')
        });
    })
})
console.log('starting next task');