const http = require('http');
const fs  = require('fs');


const server = http.createServer((req, res) => {
    console.log('request made');

    let path = '../html/'
    let styles = '../styles/Styles.css'


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

        case "/styles/Styles.css":
            res.writeHead(200, {"Content-Type": "text/css"});
            var fileStream = fs.createReadStream(styles, "UTF-8");
            fileStream.pipe(res);
            break
        
        default:
            path += '404.html'
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log("error")
            res.end()
        }
        else {
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()
        }
    } )
});

server.listen(3000, () => {
    console.log('listening for requests on port 3000')
})