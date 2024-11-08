// html-server.js

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <html>
            <head>
                <title>My Web Server</title>
            </head>
            <body>
                <h1>Welcome to my Node.js Web Server</h1>
                <p>This is a simple HTML page served by Node.js</p>
            </body>
        </html>
    `);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
