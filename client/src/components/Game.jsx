import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"
import DeckClass from "../utilities/DeckClass"





export default function Game(){
              
const [gameOver, setGameOver] = useState();
const [player1Deck, setPlayer1Deck] = useState([]);
const [player1FlippedCards, setPlayer1FlippedCards ] = useState([]);

const [player2Deck, setPlayer2Deck] = useState([]);
const [player2FlippedCards, setPlayer2FlippedCards ] = useState([]);

const [player3Deck, setPlayer3Deck] = useState([]);
const [player3FlippedCards, setPlayer3FlippedCards ] = useState([]);

const [player4Deck, setPlayer4Deck] = useState([]);
const [player4FlippedCards, setPlayer4FlippedCards ] = useState([]);

const [playedCardsPile, setPlayedCardsPile] = useState([])

const[users,setUsers] = useState([])
const[turn, setTurn] = useState()
const [currentValue, setCurrentValue] = useState('')




      useEffect(() => {
            const shuffledCards = new DeckClass();

            console.log(shuffledCards)

            const player1Deck = shuffledCards.deck.splice(0, 3);
            const player2Deck = shuffledCards.deck.splice(0, 3);
            const player3Deck = shuffledCards.deck.splice(0, 3);
            const player4Deck = shuffledCards.deck.splice(0, 3);

            console.log(...player1Deck);
            console.log(...player2Deck);
            console.log(...player3Deck);
            console.log(...player4Deck);

            console.log(shuffledCards)
            let socket = io.connect("http://127.0.0.1:3001")

            socket.emit('join_room', {room: room}, (error) => {
                  if(error)
                  setRoomFull(true);
            })
        }, [])




      return(
            <div>
                  <h1>hej</h1>
                  <button>Play card</button>
                  <br />
                  <br />
                  <button>Chance card</button>


            </div>
      )
}