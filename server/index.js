const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
      cors: {
            origin: "http://127.0.0.1:5174",
            methods: ["GET", "POST"],
      },
});

io.on('connection', (socket) => {

      socket.on("join_room", (data) => {
            socket.join(data);
            console.log(`User Connected: ${socket.id}` + " to " + data);

      })
      // console.log(`User Connected: ${socket.id}`);

})


server.listen(3001, () => {
      console.log("SERVER IS RUNNING");
})