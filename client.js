const net = require('net');
const args = process.argv.slice(2,6);
const IP = args[0];
const PORT = args[1];
const requestFilePath = args[2];
const printFilePath = args[3];

const fs = require('fs');


const conn = net.createConnection({
  host: IP,
  port: PORT
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  console.log(`connected on port ${PORT}...`)
  conn.write(requestFilePath); 
});

conn.on('data', (data) => {
  console.log(data, printFilePath);
  fs.writeFile(printFilePath, data, (err) => {
    if(err) throw err;
    console.log('file saved to disk');
    process.exit();
  })
})
