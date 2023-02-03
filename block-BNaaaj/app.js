var area=require('./area.js')

console.log(area.sqr(2))
console.log(area.rec(2,3))
console.log(area.cir(2))



// write code to require only readFile and unlink method from fs module.
var {readFile,unlink} =require('fs')
readFile('content.md','utf8',(err,content)=>console.log(content,'ghj'))

unlink('content.md',(err)=>console.log('file deleted content.md'))