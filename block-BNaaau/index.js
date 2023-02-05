var http = require('http')
var url = require('url')
var fs=require('fs')

/*Q. Create a basic server using http's createServer

-listen for request on port 5000
-console request and response object
-do a request using browser on localhost:5000
-check out console for request and response object  */

let server = http.createServer(handleRequest)
// function handleRequest(req,res){
//     console.log(req,res)
//     res.end('Welcome')
// }
// server.listen(5000)

/*Q. create a node server

-add listener on port 5100
-respond with 'My first server in NodeJS' using response object */

// function handleRequest(req,res){
//     res.end('My first server in NodeJS')
// }
// server.listen(5100)

/*Q. write code to create a node server

-add listener on port 5555
-console request headers
-respond with content of user-agent from request headers.*/

// function handleRequest(req,res){
//     console.log(req.headers)
//     res.end(req.headers['user-agent'])
// }
// server.listen(5555)

/*Q. write code to create a node server

-add listener on port 5566
-console request url and request method
-return a text response with requested url and method*/

// function handleRequest(req,res){
//     console.log(req.url,req.method)
//     res.end(req.method+req.url)
// }
// server.listen(5566)


// function handleRequest(req,res){
//     res.end(JSON.stringify(req.headers))
// }
// server.listen(7000,()=>{
//     console.log('server listening on port 7000')
// })

// function handleRequest(req,res){
//     res.statusCode=201
//     res.end(JSON.stringify(req.headers))
// }
// server.listen(3333)

// function handleRequest(req,res){
//     res.setHeader('content-Type','text/html')
//     res.end('<h3>Welcome to altcampus</h3>')
// }
// server.listen(8000)

// function handleRequest(req,res){
//     res.writeHead(400,{'content-Type':'text/html'})
//     res.end('<h3>Welcome to altcampus</h3>')
// }
// server.listen(8000)

// function handleRequest(req,res){
//     res.setHeader('content-Type','application/json')
//     res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}))
// }
// server.listen(8888)


// function handleRequest(req,res){
//     console.log(req.method)
//     res.setHeader('content-Type','text/html')
//     res.end('<h2>posted for first time</h2>')
// }
// server.listen(5050)

// function handleRequest(req, res) {
//     if (req.method === 'GET' && req.url === '/') {
//         res.setHeader('content-Type', 'text/plain')
//         res.end('ajay kumar')
//     } else if (req.method === 'GET' && req.url === '/about') {
//         res.setHeader('content-Type', 'text/html')
//         res.end('<h2>ajay kumar</h2>')
//     }else{
//      res.statusCode=404
//         res.end(' page not found')
//     }
// }
// server.listen(2345)


// function handleRequest(req, res) {
//     if (req.method === 'GET' && req.url === '/users') {
//         res.setHeader('content-Type', 'text/html')
//         fs.createReadStream('./form.html').pipe(res)
//     } else if (req.method === 'POST' && req.url === '/users') {
//         res.setHeader('content-Type', 'text/html')
//         res.end('Posted for the second time')
//     }else{
//         res.end('404 page not found')
//     }
// }
// server.listen(2345)


function handleRequest(req, res) {
    // let parsedUrl = url.parse('/users?email=nodeserver@gmail.com ')
     let parsedUrl=url.parse(req.url,true)  
     console.log(parsedUrl)
    let pathname = parsedUrl.pathname
    let query = parsedUrl.query
    console.log(pathname,req.url)
    res.setHeader('content-Type','application/json')
    res.end(JSON.stringify(query))
}
server.listen(4000)