const http = require('http');
const fs  = require('fs');


const server = http.createServer((req, res) => {
    console.log('request made');

    res.setHeader('Content-Type', 'text/html')

    let path = '../html/'

    switch(req.url) {
        case '/':
            path += 'index.html'
            break;
            
        case '/about':
            path += 'about.html'
            break;
        
        case '/contact':
            path += 'contact-me.html'
            break;
        
        default:
            path += '404.html'
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            // put 404 page here
            console.log("error")
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    } )
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})