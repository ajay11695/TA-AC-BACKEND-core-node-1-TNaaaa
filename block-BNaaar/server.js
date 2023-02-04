var http=require('http')
var url=require('url')

var server=http.createServer(handleRequest)
function handleRequest(req,res){
    let parsedUrl=url.parse(req.url)
    let pathname=parsedUrl.pathname
    // console.log(req.method,req.url,pathname)
    if(req.method==='GET' && req.url==='/'){
        res.setHeader('content-Type','text/plain')
        res.end('Welcome to homepage')
    }else if(req.method==='GET' && pathname==='/about'){
        res.setHeader('content-Type','text/html')
        res.end('<h2>this is all about NodeJS')
    }else if(req.method==='POST' && req.url==='/about'){
        res.setHeader('content-Type','application/json')
        res.end('{message: this is a post request}')
    }else{
        res.end('page is not found')
    }
}
server.listen(5000,()=>{
    console.log('server listening on port 5k')
})