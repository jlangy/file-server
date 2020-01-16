const net = require('net');
const args = process.argv.slice(2,5);
const IP = args[0];
const PORT = args[1];
const fileName = args[2];

const conn = net.createConnection({
  host: IP,
  port: PORT
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  console.log(`connected on port ${PORT}...`)
  conn.write(fileName); 
});

conn.on('data', (data) => {
  console.log(data);
})
