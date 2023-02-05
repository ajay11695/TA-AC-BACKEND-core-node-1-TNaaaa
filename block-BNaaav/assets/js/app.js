var http = require('http')
var fs = require('fs')

let server = http.createServer(handleRequest)
function handleRequest(req, res) {
    console.log(req.url)
    if (req.method === 'GET' && req.url === '/') {

        fs.readFile('../../application/index.html', 'utf8', (err, content) => {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(201, { 'Content-Type': 'text/html' })
                res.end(content)
            }
        })
    }
    else if (req.method === 'GET' && req.url === '/about') {
        fs.createReadStream('../../application/about.html').pipe(res)
    }
    else if (req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css')

        fs.readFile('../stylesheet' + req.url, "utf8", (err, content) => {
            if (err) return console.log(err);
            res.end(content)
        })
    }
    else if (req.url.split('.').pop() === 'jpg') {
        res.setHeader('Content-Type', 'image/jpg')
        fs.readFile('../images' + req.url, (err, content) => {
            if (err) return console.log(err)
            res.end(content)
        })
    }

}
server.listen(5000, () => {
    console.log('serever port 5000 connected');
})