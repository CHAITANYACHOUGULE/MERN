const net = require('net');
const readline = require('readline');

// Create a readline interface to handle input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a TCP client and connect to the chat server
const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to chat server');
  rl.question('Enter your name: ', (name) => {
    client.write(`${name} has joined the chat\n`);
  });
});

// Handle incoming data from the server
client.on('data', (data) => {
  console.log(data.toString());
});

// Handle client disconnection
client.on('end', () => {
  console.log('Disconnected from server');
});

// Handle errors
client.on('error', (err) => {
  console.error(`Client error: ${err.message}`);
});

// Send user input to the server
rl.on('line', (input) => {
  client.write(`${input}\n`);
});
