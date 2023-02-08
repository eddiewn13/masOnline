import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import roomCreation from "../utilities/randomCodeGenerator"


export default function Homepage() {

      const [roomCode, setRoomCode] = useState('')

      return(
            <div>
                        <input type='text' placeholder='Game Code' onChange={(event) => setRoomCode(event.target.value)} />
                        <Link to={`/play?roomCode=${roomCode}`}><button className="game-button green">JOIN GAME</button></Link>
                        
                        <Link to={`/play?roomCode=${roomCreation(5)}`}><button className="game-button orange">CREATE GAME</button></Link>
            </div>
      )
}