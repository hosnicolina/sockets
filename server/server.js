const express = require("express");
const soketIO = require('socket.io');
const http = require('http')

const path = require("path");

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

// IO = es la comunicacion del bakend
module.exports.io = soketIO(server);

require('./sockets/socket')



app.use(express.static(publicPath));

server.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
