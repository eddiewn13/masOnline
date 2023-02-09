import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import roomCreation from "../utilities/randomCodeGenerator"
import { io } from "socket.io-client"


let socket = io.connect("http://127.0.0.1:3001")
let createCode = roomCreation(5);


export default function Homepage() {

      const [roomCode, setRoomCode] = useState('');

      const joinRoom = () =>{
                  socket.emit("join_room", roomCode);
      }

      const createRoom = () => {
            socket.emit("join_room", createCode);
      }

      return(
            <div>
                        <input 
                              type='text' 
                              placeholder='Game Code...' 
                              onChange={(event) => {
                              setRoomCode(event.target.value)
                              }} 
                              />
                        <Link to={`/play?roomCode=${roomCode}`}>
                              <button 
                                    className="game-button green" 
                                    onClick={joinRoom}>
                                    JOIN GAME
                              </button>
                                    </Link>

                        
                        <Link to={`/play?roomCode=${createCode}`}>
                              <button 
                                    className="game-button orange"
                                    onClick={createRoom}>
                                     CREATE GAME
                              </button>
                              </Link>
            </div>
      )
}