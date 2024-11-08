// Import the net module
const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // Handle incoming data from client
  socket.on('data', (data) => {
    console.log(`Received: ${data}`);
    // Respond to the client
    socket.write('Hello from server!\n');
  });

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });

  // Handle errors
  socket.on('error', (err) => {
    console.error(`Socket error: ${err.message}`);
  });
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
