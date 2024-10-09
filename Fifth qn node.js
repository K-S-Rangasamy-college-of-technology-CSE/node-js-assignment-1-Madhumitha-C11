Develop a TCP server and client program 
TCP Server:
 const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected.');

    socket.on('data', (data) => {
        console.log(`Received from client: ${data}`);
        socket.write(`Server received: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
TCP Client:
const net = require('net');

const client = new net.Socket();
const PORT = 8080;

client.connect(PORT, '127.0.0.1', () => {
    console.log('Connected to server');
    client.write('Hello from client');
});

client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
    client.destroy(); 
}
client.on('close', () => {
    console.log('Connection closed');
});

 
