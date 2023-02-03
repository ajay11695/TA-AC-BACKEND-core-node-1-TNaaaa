// Q. Write code to run index.js with content console.log('Welcome to Nodejs') in node environment ?
console.log('Welcome to Nodejs')

// require os module
var os=require('os')
var cpus=os.cpus().length
console.log(cpus)
var freem=os.freemem()
console.log(freem)
var uptime=os.uptime()
console.log(uptime)
var version=os.version()
console.log(version)


// buffer class
// Buffer.alloc()
// Buffer.allocUnsafe()

var buff1=Buffer.alloc(12)
var buff2=Buffer.allocUnsafe(12)
buff1.write('hello world')
console.log(buff1.toString())


// Q. Write code example to demonstrate blocking and non-blocking 
var {readFile,readFileSync,unlink,fstat}=requre('fs')
var sync=readFileSync('./app.js')
readFile('./app.js',(err,content)=>{
    console.log(err,content.toString())
})



//   sync-blocking
console.time('task1')
for(let i=0;i<1000;i++){

}
console.timeEnd('task1')

// async=non-blocking
console.time('task2')
setTimeout(()=>{
    console.log('time execution')
    console.timeEnd('task2')
})


