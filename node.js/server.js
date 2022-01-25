const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static('../public'));
app.use('/css', express.static(__dirname + 'public/css'))



app.get('/', function(req, res) {
        res.sendFile(path.join(process.cwd(), '../html/index.html'));
});


app.get('/contact', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../html/contact-me.html'));
});


app.get('/about', function(req, res) {
    res.sendFile(path.join(process.cwd(), '../html/about.html'));
});


app.get('*', function (req, res, next) {
    res.sendFile(path.join(process.cwd(), '../html/404.html'));
});


app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
  });