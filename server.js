const net = require('net');
const server = net.createServer();

const fs = require('fs');

const pipeFileToClient = (filePath, client) => {
  const readStream = fs.createReadStream(filePath);
  readStream.on('open', function(){
    readStream.pipe(client);
  });
}

server.on('connection', (client) => {  
  client.on('data', (filename) => {
    const filePath = 'serverDir/' + filename;
    fs.exists(filePath, (exists) => {
      exists ? pipeFileToClient(filePath, client) : client.emit('error'); 
    });
  });
});

server.listen(3000, () => {
  console.log('server running...');
});