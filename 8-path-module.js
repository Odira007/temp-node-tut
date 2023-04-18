// BUILT-IN MODULES. PATH

// separate property that returns a platform specific separator
const path = require('path');
console.log(path.sep)

// path.join() joins a sequence of path segments using that platform specific separator
// it also returns a normalized resulting path
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath);

// to get the final path (eg test.txt in the example), the method name is basename
const base = path.basename(filePath);
console.log(base);

// path.resolve() returns an absolut path. It accepts path segments
const abs = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(abs)