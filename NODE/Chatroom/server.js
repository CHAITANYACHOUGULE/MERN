const net = require('net');

// Array to keep track of all clients
const clients = [];

// Create server
const server = net.createServer((socket) => {
    // Add new client to the list
    clients.push(socket);
    
    // Notify the new client
    socket.write('Welcome to the chat!\n');

    // Handle incoming messages from clients
    socket.on('data', (data) => {
        // Log the message to the server console
        console.log(`Client: ${data.toString().trim()}`);
        
        // Broadcast the message to all clients
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(data);
            }
        });
    });

    // Handle client disconnect
    socket.on('end', () => {
        clients.splice(clients.indexOf(socket), 1);
        console.log('Client disconnected');
    });

    // Handle errors
    socket.on('error', (err) => {
        console.log('Error:', err.message);
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Chat server running on port 3000');
});
