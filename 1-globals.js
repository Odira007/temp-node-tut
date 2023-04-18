// in node there is no window

// GLOBALS - NO WINDOW
// Global means that anywhere in your application you can access them. No matter how complicated your app gets

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('Hello World');
}, 1000);