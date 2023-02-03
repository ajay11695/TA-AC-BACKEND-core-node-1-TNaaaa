require fs in a file(index.js) and use fs.readFile to read content of a file(content.md)

create file whenever required on your own.

// index.js
fs.readFile('./content.md'// filepath, (err, file) => {
  // handle error or content of the file
})

Run sync code from fs module in the above file(index.js).

Run async code from fs module in same file.

create new buffer of fixed length 10 and store it in variable named buff1 and console the buff1.

write content(Welcome to Buffer) to buff1 variable.