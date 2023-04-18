// MODULES - encapsulated code (only share minimum) 
// every file in node is a module
const names = require('./3-names');
const sayHi = require('./4-utils')
const data = require('./5-alt');
require('./6-challenge');

// console.log(data)
// sayHi(names.chika);
// sayHi(names.odira)
// Would it make sense that this function and future funtions be in separate files all through the app?
// so you can have smaller files and more structure to the application and thats what the modules help to do