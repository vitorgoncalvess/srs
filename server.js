const express = require('express');
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const http = require('http');
const socketIO = require('socket.io');

app.prepare().then(async () => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = socketIO(httpServer);

  io.on('connection', (socket) => {

    socket.on('section-update-server', (id) => {
      io.emit('section-update', id);
    })
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});