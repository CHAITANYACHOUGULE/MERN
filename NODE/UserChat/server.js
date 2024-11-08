// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

const clients = new Map(); // Store usernames by connection

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);

        if (parsedMessage.type === 'register') {
            // Register the client with their username
            clients.set(ws, parsedMessage.username);
            console.log(`Client registered: ${parsedMessage.username}`);
        } else if (parsedMessage.type === 'message') {
            // Broadcast the message to all clients
            const sender = clients.get(ws);
            const formattedMessage = `${sender}: ${parsedMessage.text}`;

            console.log(`Broadcasting message: ${formattedMessage}`);
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'message', text: formattedMessage }));
                }
            });
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server is listening on port 5000');
