// http protocol
var urlStr='https://airindia.com/fares/calculate?from=delhi&to=detroitand'
var url=require('url')
var parsedUrl=url.parse(urlStr,true)
console.log(parsedUrl.query)
console.log(parsedUrl.pathname,parsedUrl.protocol)