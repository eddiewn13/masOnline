import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import roomCreation from "../utilities/randomCodeGenerator"
import { io } from "socket.io-client"


let socket = io.connect("http://127.0.0.1:3001")
let createCode = roomCreation(5);


export default function Navbar() {

      const [roomCode, setRoomCode] = useState('');

      const joinRoom = () =>{
                  socket.emit("join_room", roomCode);
      }

      const createRoom = () => {
            socket.emit("join_room", createCode);
      }

      return(

            <section className="flex  top-0 z-50 h-full absolute left-0">
                  <div className="w-fit min-h-screen px-[10px] py-8 bg-[#202020] text-white flex flex-col gap-[120px]">
                        <img src="../bilder/mas online.png" alt="img not found" className="w-[100px] rounded-[20px]" />
                        <div className="flex flex-col justify-center items-center">
                              <ul className="flex flex-col gap-[30px] text-[26px]">
                                    <li>Play</li>
                                    <li>Profil</li>
                                    <li>Guide</li>
                                    <li>Store</li>
                              </ul>
                        </div>

                        <div className=" flex flex-col justify-center items-center text-[22px] gap-[10px]">
                              <input type="button" value="Login" className="rounded-[15px] bg-[blue] py-[3px] w-full"/>
                              <input type="button" value="Sign up" className="rounded-[15px] bg-[#90EE90] py-[3px] w-full"/>
                        </div>
                  </div>
                  <div className=" ">
                              <h1>Enter lobby code</h1>
                              <input 
                                    type='text' 
                                    placeholder='Game Code...' 
                                    onChange={(event) => {
                                    setRoomCode(event.target.value)
                                    }} 
                                    />
                              <Link to={`/play?roomCode=${roomCode}`}>
                                    <button 
                                          className="" 
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

            </section>
      )
}