const net = require('net');
const readline = require('readline');

// Create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create connection to the server
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to the chat server');
});

// Display messages from the server
client.on('data', (data) => {
    console.log(data.toString());
});

// Prompt for username
rl.question('Enter your username: ', (username) => {
    client.write(username); // Send username to server

    // Prompt for input and send to server
    rl.on('line', (input) => {
        client.write(input);
    });
});

// Handle client disconnect
client.on('end', () => {
    console.log('Disconnected from the chat server');
    rl.close(); // Close the readline interface
});
