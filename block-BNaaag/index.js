// var fs=require('fs')
// fs.readFile('./content.md','utf8',(err,content)=>{
//     console.log(content)
// })

var { readFile,readFileSync}=require('fs')

// async version
readFile('./content.md','utf8',(err,content)=>{
    console.log(content)
})

// sync version
var result= readFileSync('./content.md','utf8')
console.log(result)

var buff1=Buffer.alloc(10)
buff1.write('Welcome to Buffer')
console.log(buff1)