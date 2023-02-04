let http=require('http')

let server=http.createServer(handleResponse)
function handleResponse(req,res){
    console.log(req.method)
    res.status=201
    res.setHeader('content-Type','text/html')
    res.write('hello')
    res.end('<h1>Welcome</h1>')
}
server.listen(4444,()=>{
    console.log('server is listening to port 4444')
})

