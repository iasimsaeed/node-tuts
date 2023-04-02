const http = require('http')

const server = http.createServer((req,res) => {
    
    if( req.url === '/') {
        res.end('Welcome to our homepage')
    }

    if(req.url === '/about') {
        res.end('Here is our history')
    }

    res.end(`
    <h1>Oops! Not found</h1>
    <a href="/">Go back to home</a>
    `)

})

server.listen(5000)