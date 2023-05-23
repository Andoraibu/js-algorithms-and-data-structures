const http = require('http');

const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end('Connected.');
});

const wss = new websocket.WebSocketServer({server});

wss.on('headers', (headers, req) => {
    console.log(headers);
});

console.log("listening: http://localhost:8000");

server.listen(8000);