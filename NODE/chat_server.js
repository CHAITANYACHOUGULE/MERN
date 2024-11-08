const net = require('net');

// Array to hold all connected clients
const clients = [];

// Create the server
const server = net.createServer((socket) => {
  // Add new client to the list
  clients.push(socket);
  console.log('New client connected');

  // Notify all clients about the new connection
  broadcast(socket, 'A new user has joined the chat\n');

  // Handle incoming data from the client
  socket.on('data', (data) => {
    broadcast(socket, data.toString());
  });

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
    clients.splice(clients.indexOf(socket), 1); // Remove client from the list
    broadcast(socket, 'A user has left the chat\n');
  });

  // Handle errors
  socket.on('error', (err) => {
    console.error(`Socket error: ${err.message}`);
  });
});

// Function to broadcast messages to all clients except the sender
function broadcast(sender, message) {
  clients.forEach((client) => {
    // Don't send the message to the sender
    if (client !== sender) {
      client.write(message);
    }
  });
}

// Make the server listen on port 3000
server.listen(3001, () => {
    console.log('Chat server listening on port 3001');
  });
  
