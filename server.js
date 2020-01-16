const net = require('net');

const server = net.createServer();


server.on('connection', (client) => {
  client.setEncoding('utf8');
  
  client.on('data', (data) => {
    console.log(data);
  });
});



server.listen(3000, () => {
  console.log('server running...');
});

