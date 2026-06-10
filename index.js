const http = require('http')
const server = http.createServer((req, res) => {
  res.end('Hello Helsinki Test Deployment!')
})
const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Running on port ${port}`))
