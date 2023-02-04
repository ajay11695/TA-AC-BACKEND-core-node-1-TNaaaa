let http=require('http')
let server= http.createServer(requestHandle)
function requestHandle(request,response){
    console.log(request,response)
    response.end('welcome')
}

server.listen(4000,()=>{
    console.log('server is listening on port 4000')
})