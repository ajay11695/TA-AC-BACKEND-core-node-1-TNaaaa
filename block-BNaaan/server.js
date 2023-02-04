let http=require('http')

let server=http.createServer(handleRequest)
function handleRequest(req,res){
    console.log(req.method,req.url)
    console.log(req.headers)
    res.end('Welcome')
}

server.listen(3000)