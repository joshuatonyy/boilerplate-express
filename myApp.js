var express = require('express');
var app = express();
var absolutePathIndex = __dirname + '/views/index.html';
app.use('/public', express.static(__dirname + '/public')); //show static files
app.get('/', (req, res) => { //sendfile from index
    res.sendFile(absolutePathIndex);
})
app.get('/json', (req, res) =>{ //using json
    res.json({"message": "Hello json"});
})
console.log("Hello World");




































 module.exports = app;
