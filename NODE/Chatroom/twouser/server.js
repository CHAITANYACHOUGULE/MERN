const net = require('net');

// Array to keep track of all clients
const clients = [];

// Create server
const server = net.createServer((socket) => {
    // Add new client to the list
    clients.push(socket);
    
    // Notify the new client
    socket.write('Welcome to the chat! Please enter your username:\n');

    // Variable to hold the username
    let username = '';

    // Handle incoming messages from clients
    socket.on('data', (data) => {
        const message = data.toString().trim();
        
        // If username is not set, set it
        if (!username) {
            username = message;  // Set the username
            console.log(`${username} has joined the chat.`);
            socket.write(`You are now chatting as ${username}\n`);
            return;  // Don't broadcast the username message
        }

        // Log the message to the server console
        console.log(`${username}: ${message}`);

        // Broadcast the message to all clients
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(`${username}: ${message}\n`);
            }
        });
    });

    // Handle client disconnect
    socket.on('end', () => {
        clients.splice(clients.indexOf(socket), 1);
        console.log(`${username} has left the chat.`);
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
