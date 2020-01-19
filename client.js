const net = require('net');
const args = process.argv.slice(2,6);
const [ IP, PORT, requestFilePath, printFilePath] = args;
const fs = require('fs');
const writeStream = fs.createWriteStream(printFilePath);

const conn = net.createConnection({
  host: IP,
  port: PORT
});

conn.on('connect', () => {
  conn.write(requestFilePath); 
});

conn.on('data', (data) => {
  writeStream.write(data);
});

conn.on('error', () => {
  console.log('File not found. Exiting');
  conn.destroy();
});
