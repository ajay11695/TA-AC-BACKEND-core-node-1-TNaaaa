var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);

console.log(parsedUrl) 
console.log(parsedUrl.pathname) 
console.log(parsedUrl.query) 
console.log(parsedUrl.host,parsedUrl.protocol) 

// 2.Do a request on google.com and view headers inside developer's network tab by clicking on a specific request.

var parsedUrl2=url.parse('https://www.google.com')
console.log(parsedUrl2)