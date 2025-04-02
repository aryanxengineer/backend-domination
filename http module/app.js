const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('this is a home page');
    } else {
        res.end('not found');
    }
})

server.listen(3000, () => {
    console.log("Server is running...")
})