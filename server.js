const net = require('net');
const server = net.createServer();

const fs = require('fs');


server.on('connection', (client) => {
  client.setEncoding('utf8');
  
  client.on('data', (filename) => {
    const filePath = 'serverDir/' + filename;
    fs.exists(filePath, (exists) => {
      if (exists){
        console.log('found it!');
      } else {
        console.log('cant find the file!');
      }
    });
  });
});



server.listen(3000, () => {
  console.log('server running...');
});

