const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
      cors: {
            origin: "http://127.0.0.1:5173",
            methods: ["GET", "POST"],
      },
});

io.on('connection', (socket) => {
      socket.on("join_room", (payload, callback) => {

            let numberOfUsersInRoom = getUsersInRoom(payload).length

            console.log("payload: " + payload)
            
            const {error, newUser } = addUser({
                id: socket.id,
                name: numberOfUsersInRoom===0 ? 'Player 1' : 'Player 2',
                room: payload
            })

            if(error){
                  return callback(error)
            }
        socket.join(newUser.room)
        
        io.to(newUser.room).emit('roomData', {room: newUser.room, users: getUsersInRoom(newUser.room)})
        socket.emit('currentUserData', {name: newUser.name})
      
        console.log(`User Connected: ${socket.id}` + " to " + newUser.room); 
      
        
      })

      socket.on('initGameState', gameState => {
            const user = getUser(socket.id)
            if(user)
                io.to(user.room).emit('initGameState', gameState)
        })
    
        socket.on('updateGameState', gameState => {
            const user = getUser(socket.id)
            if(user)
                io.to(user.room).emit('updateGameState', gameState)
        })

})


server.listen(3001, () => {
      console.log("SERVER IS RUNNING");
})