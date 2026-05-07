const http = require('http')
const server = http.createServer((req, res) => {
  res.end('Hello Helsinki!')
})
server.listen(3000, () => console.log('Running on port 3000'))
